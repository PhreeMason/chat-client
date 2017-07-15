import React from 'react';
import {Grid} from 'semantic-ui-react'
import ChatInput from './ChatInput'
import MessageShow from './MessageShow'
import Loading from '../Loading'
import PropTypes from 'prop-types'

class ChatShow extends React.Component {
  constructor() {
    super();
    this.state ={
      messages:[]
    }
  }

  componentDidMount() {
    setTimeout(()=>this.setMessages(this.props), 1500)
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
    const { messages, loading } = this.state
    return (
      <Grid.Column>
        <MessageShow messages={messages} />  
          
        <ChatInput handleSubmit={this.handleSubmit}/>
      </Grid.Column> 
    );
  }
}

ChatShow.propTypes = {  
  messages: PropTypes.object.isRequired,
  apiCable: PropTypes.object.isRequired
};

export default ChatShow;