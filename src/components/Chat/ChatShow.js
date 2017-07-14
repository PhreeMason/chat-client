import React from 'react';
import { connect } from 'react-redux';
import {Grid} from 'semantic-ui-react'
import { setCurrentChat, sendMessage } from '../../redux/modules/Chat/actions' 
import ChatInput from './ChatInput'
import MessageShow from './MessageShow'
import Loading from '../Loading'
import PropTypes from 'prop-types'

class ChatShow extends React.Component {
  constructor() {
    super();
    this.state ={
      currentChat:{
        messages:[]
      } 
    }
  }

  componentDidMount() {
    setTimeout(()=>this.setChat(this.props.match), 1500)
  }
 
  handleSubmit=(body)=>{
    const {id} = this.state.currentChat
    const message = {chatroom_id: id, body: body}
    this.props.apiCable.messenger.perform("send_message", message)
  }

  componentWillReceiveProps(nextProps) {
    this.setChat(nextProps.match)
  }

  setChat =(match)=>{
    const currentRoom = this.props.chats.find(room=>{
      return room.id === parseInt(match.params.chatId, 10)
    })

    if (currentRoom) {
      this.setState({
        currentChat: currentRoom
      })
    }
  }
 


  render() {
    const { currentChat } = this.state
    return (
      <Grid.Column>
        {currentChat.name ?
         <div>
           <h3>{currentChat.name}</h3>
           <MessageShow messages={currentChat.messages} />  
         </div>
        : <Loading/> }
        <ChatInput handleSubmit={this.handleSubmit}/>
      </Grid.Column> 
    );
  }
}

ChatShow.propTypes = {  
  chats: PropTypes.array.isRequired,
  apiCable: PropTypes.object.isRequired
};

export default connect(null, { setCurrentChat, sendMessage })(ChatShow);