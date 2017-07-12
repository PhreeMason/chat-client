import React from 'react';
import {List} from 'semantic-ui-react'

export default class MessageShow extends React.Component {

  render() {
    const {messages} = this.props
    return (
      <List>
        {messages.map((message) => 
           <List.Item key={message.id}>
              <List.Content>
                <List.Header>{message.user_name}</List.Header>
                <List.Description>{message.body}</List.Description>
              </List.Content>
           </List.Item>
        )}
      </List>
    );
  }
}

