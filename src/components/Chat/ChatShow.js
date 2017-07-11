import React from 'react';
import { connect } from 'react-redux';
import {Grid} from 'semantic-ui-react'

const ChatShow =({chat})=> {
  return (
  	<Grid.Column>
  	  {chat.name || 'Something went wrong'}
    </Grid.Column> 
  );
}

const mapStateToProps = (state, ownProps) => {
  const chat = state.chat.chatroom
  if (chat.id===ownProps.match.params.chatId) {
    return { chat }
  } else {
    return { chat: {} }
  }
}

export default connect(mapStateToProps)(ChatShow);