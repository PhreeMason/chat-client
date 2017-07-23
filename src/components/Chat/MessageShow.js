import React from 'react';
import { Segment, Button, Popup} from 'semantic-ui-react'
import { StyleSheet, css  } from 'aphrodite';

const sheet = StyleSheet.create({
  messages:{
    minHeight: '300px',
    maxHeight: '600px',
    overflowY: 'scroll'
  }
})


const linkUser = (username, dM, getUser) => (
  <Popup wide trigger={<strong>{username}</strong>} on='click'>
    <Popup
      trigger={<Button icon='talk' onClick={()=>dM({username: username})} />}
      content='Message'
    />
  </Popup>
)

const MessageShow = ({dM, messages=[], username}) =>{
  setTimeout(() => {
    const messageBox = document.getElementsByClassName('messages_8ggv56')
    if (messageBox["0"]) {
      messageBox["0"].scrollTop = messageBox["0"].scrollHeight;
    }
  }, 250)
  return (
    <div className={css(sheet.messages)}>
      {messages.map((message, i) =>
        <Segment key={i} raised
          color={username === message.user_name ?'black':'orange'}
          textAlign={username === message.user_name ?'right':'left'}> 
          {username === message.user_name ? null : linkUser(message.user_name, dM)}
          <p>{message.body}</p>
        </Segment>
      )}
    </div>
  );
}

export default MessageShow



