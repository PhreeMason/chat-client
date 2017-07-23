import React from 'react';
import {Grid} from 'semantic-ui-react'
import ChatInput from './ChatInput'
import MessageShow from './MessageShow'
import PropTypes from 'prop-types'
import {directMessage, leaveChat} from '../../redux/modules/Chats/actions'
import {connect} from 'react-redux'
import {updateMesages, setCurrentMessages} from '../../redux/modules/Messages/actions'
import Loading from '../Loading'
import { Button, Popup } from 'semantic-ui-react'

class ChatShow extends React.Component {
  
  componentDidMount() {
    this.setMessages(this.props)
  } 

  handleSubmit = (body) =>{
    const id = this.props.match.params.chatId
    const message = {chatroom_id: id, body: body}
    this.props.apiCable[`chat_${id}`].perform("send_message", message)
  }

  componentWillReceiveProps(nextProps) {
    this.setMessages(nextProps)
  }

  setMessages =(props)=>{
    const oldId = this.getId(this.props)
    const id = this.getId(props)
    const {apiCable, setCurrentMessages} = props
    if (!apiCable[`chat_${id}`]) {
      setCurrentMessages(id)
      apiCable[`chat_${id}`] = apiCable.subscriptions.create({channel: 'ChatroomsChannel', id: id}, {
        connected: function() { console.log('connected') },
        disconnected: function() { console.log("cable: disconnected") },
        received: (data) => this.props.updateMesages(data, id)
      })
    }
    if (oldId !== id) {setCurrentMessages(id)}
  }

  leaveRoom = () =>{
    this.props.leaveChat(this.getId(this.props))
    this.props.history.replace('/chats')
  }
  
  componentWillUnmount() {
    const {apiCable} = this.props
    apiCable.subscriptions.subscriptions.forEach((sub) => {
      var identifier = JSON.parse(sub.identifier)
      sub.unsubscribe()
      apiCable[`chat_${identifier.id}`] = null
    })
    console.log(apiCable)
  }
  
  getId = (props) =>{
    return parseInt(props.match.params.chatId, 10)
  }

  render() {
    const id = this.getId(this.props)
    const { messages, status } = this.props.messages
    return (
      <Grid.Column width={10}>
        {status === 'fetched'? <MessageShow
          username={this.props.currentUsername}
          messages={messages[id]} dM={this.props.directMessage}/> 
          : <Loading />}   
        <br/>
        <ChatInput handleSubmit={this.handleSubmit}/>
        <br/>
        <Popup     
          trigger={<Button color='red' icon='flask' content='Leave Chat' />}
          content={<Button negative onClick={()=>this.leaveRoom()} content='Confirm to leave the Chat' />}
          on='click'
          position='top right'
        />
      </Grid.Column> 
    );
  }
}

ChatShow.propTypes = {  
  messages: PropTypes.object.isRequired,
  apiCable: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, {leaveChat, directMessage, updateMesages, setCurrentMessages})(ChatShow);