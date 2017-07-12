import React from 'react';
import { connect } from 'react-redux';
import {Grid} from 'semantic-ui-react'
import { setCurrentChat, sendMessage } from '../../redux/modules/Chat/actions' 
import ChatInput from './ChatInput'
import MessageShow from './MessageShow'
import Loading from '../Loading'
class ChatShow extends React.Component {
  componentDidMount() {
    const {setCurrentChat, match} = this.props
    setCurrentChat(match.params.chatId)
  }
 
  handleSubmit=(body)=>{
    const { chatroom } = this.props.chat
    this.props.sendMessage(chatroom.id, body)
  }



  render() {
    const { chatroom } = this.props.chat
    return (
      <Grid.Column>
        {chatroom.name ? 
         <div>
           <h3>{chatroom.name}</h3>
           <MessageShow messages={chatroom.messages} />  
         </div>
        : <Loading/> }
        <ChatInput handleSubmit={this.handleSubmit}/>
      </Grid.Column> 
    );
  }
}


const mapStateToProps = (state) => {
  return {
    chat: state.chat
  }
}

export default connect(mapStateToProps, { setCurrentChat, sendMessage })(ChatShow);