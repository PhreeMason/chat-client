import React from 'react';
import {Grid} from 'semantic-ui-react'
import ChatInput from './ChatInput'
import MessageShow from './MessageShow'
import Loading from '../Loading'
import PropTypes from 'prop-types'
import {directMessage} from '../../redux/modules/Chats/actions'
import {connect} from 'react-redux'
class ChatShow extends React.Component {
  constructor() {
    super();
    this.state ={
      messages:[]
    }
  }
  
  componentDidMount() {
    setTimeout(()=>this.setMessages(this.props), 500)
  } 

  handleSubmit=(body)=>{
    const message = {chatroom_id: this.props.match.params.chatId, body: body}
    this.props.apiCable.messenger.perform("send_message", message)
  }
  
  componentWillReceiveProps(nextProps) {
    this.setMessages(nextProps)
  }

  setMessages =(props)=>{
    const currentId = parseInt(props.match.params.chatId, 10)
    const currentMessages = props.messages[currentId]

    if (currentMessages) {
      this.setState({
        messages: currentMessages
      })
    }
  }
 
  render() {
    const { messages } = this.state
    return (
      <Grid.Column width={10}>
        {messages.length? <MessageShow username={this.props.currentUsername} messages={messages} dM={this.props.directMessage}/> : <Loading/>}   
        <ChatInput handleSubmit={this.handleSubmit}/>
      </Grid.Column> 
    );
  }
}

ChatShow.propTypes = {  
  messages: PropTypes.object.isRequired,
  apiCable: PropTypes.object.isRequired
};

export default connect(null, {directMessage})(ChatShow);