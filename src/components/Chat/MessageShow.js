import React from 'react';
import {List} from 'semantic-ui-react'
import { StyleSheet, css } from 'aphrodite';

const sheet = StyleSheet.create({
  messages:{
    height: '300px',
    overflowY: 'scroll'
  }
})

const MessageShow = ({messages}) =>{
  // const messagesList = document.getElementByClassName('messages_5iovkz');
  // setTimeout((messagesList) => {
  //   messagesList.scrollTop = messagesList.scrollHeight;
  // }, 1500)
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
    </div>
  );
}

export default MessageShow