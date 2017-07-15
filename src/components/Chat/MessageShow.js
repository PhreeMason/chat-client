import React from 'react';
import {List, Divider} from 'semantic-ui-react'
import { StyleSheet, css } from 'aphrodite';

const sheet = StyleSheet.create({
  messages:{
    height: '300px',
    overflowY: 'scroll'
  }
})

const MessageShow = ({messages}) =>{
  setTimeout(() => {
    const messageBox = document.getElementsByClassName('messages_5iovkz')
    messageBox.scrollTop = messageBox.scrollHeight;
  }, 1000)
  return (
    <div className={css(sheet.messages)}>
      <List>
        {messages.map((message, i) => 
           <List.Item key={i}>
              <List.Content>
                <List.Header>{message.user_name}</List.Header>
                <List.Description>{message.body}</List.Description>
              </List.Content>
           </List.Item>
        )}
      </List>
      <Divider />
    </div>
  );
}

export default MessageShow