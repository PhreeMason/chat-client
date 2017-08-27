import React from 'react';
import { Segment, Button, Popup, Grid} from 'semantic-ui-react'
import { StyleSheet, css  } from 'aphrodite';
import { Link } from 'react-router-dom';

const sheet = StyleSheet.create({
  messages:{
    minHeight: '300px',
    maxHeight: '600px',
    overflowY: 'scroll',
  },

  username:{
    cursor: 'pointer',
  }
})


const linkUser = (username, dM) => (
  <Popup wide trigger={<strong className={css(sheet.username)}>{username}</strong>} on='click'>
    <Grid divided columns='equal'>
       <Grid.Column>
          <Popup
            trigger={<Button icon='talk' onClick={()=>dM({username: username})} />}
            content='Message'
          />
        </Grid.Column>
        <Grid.Column>
          <Popup
            trigger={<Button icon='user' as={ Link } to={`/profile/${username}`} />}
            content='Profile'
          />
      </Grid.Column>
    </Grid>
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
        <Segment key={i} raised inverted
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