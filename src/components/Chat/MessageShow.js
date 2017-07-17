import React from 'react';
import { Segment, Button, Grid, Popup} from 'semantic-ui-react'
import { StyleSheet, css  } from 'aphrodite';

const sheet = StyleSheet.create({
  messages:{
    height: '600px',
    overflowY: 'scroll'
  }
})

const linkUser = (username, dM) => (
  <Popup wide trigger={<strong>{username}</strong>} on='click'>
    <Grid divided columns='equal'>
      <Grid.Column>
        <Popup
          trigger={<Button icon='talk' onClick={()=>dM({username: username})} />}
          content='Message'
        />
      </Grid.Column>
      <Grid.Column>
        <Popup
          trigger={<Button icon='user' />}
          content='Profile'
        />
      </Grid.Column>
    </Grid>
  </Popup>
)

const MessageShow = ({dM, messages, username}) =>{
  setTimeout(() => {
    const messageBox = document.getElementsByClassName('messages_gqcvba')
    messageBox["0"].scrollTop = messageBox["0"].scrollHeight;
  }, 250)
  return (
    <div className={css(sheet.messages)}>
      {messages.map((message, i) =>
        <Segment key={i} raised
          color={username === message.user_name ?'red':'teal'}
          textAlign={username === message.user_name ?'right':'left'}> 
          {username === message.user_name ? null : linkUser(message.user_name, dM)}
          <p>{message.body}</p>
        </Segment>
      )}
    </div>
  );
}

export default MessageShow



