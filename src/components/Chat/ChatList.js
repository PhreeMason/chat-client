import React from 'react'
import { Table } from 'semantic-ui-react'
import { StyleSheet, css } from 'aphrodite';
import ChatLink from './ChatLink'


const sheet = StyleSheet.create({
  div:{
    height: '100%',
    overflowY: 'auto'

  }
})

const ChatList = (props) =>{
  const chats = props.chats
  const newChat = {members: '-', name: 'New Chat'}
  return (
    <div className={css(sheet.div)}>
      <h2>Chats</h2>
      <Table basic='very' celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Chats</Table.HeaderCell>
            <Table.HeaderCell>Members</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <ChatLink chat={newChat} create={true}/>
          {chats.map((chat) => <ChatLink key={chat.id} chat={chat}/>)}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ChatList