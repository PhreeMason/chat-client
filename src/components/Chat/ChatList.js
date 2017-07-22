import React from 'react'
import { Table } from 'semantic-ui-react'
import { StyleSheet, css } from 'aphrodite';
import ChatLink from './ChatLink'


const sheet = StyleSheet.create({
  div:{
    maxHeight: '600px',
    overflowY: 'auto'

  }
})


const sortAbcOrder = (chats) =>{
  const sortedChats = chats.sort(function(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return sortedChats
}

const ChatList = (props) =>{
  var chats = props.chats
  
  chats.forEach((chat) => {
    if (chat.dm) {
      var newName = chat.dm.filter(name=> name !== props.username)
      chat.name = newName[0]
    }
  })

  chats = sortAbcOrder(chats)

  const newChat = {members: '-', name: 'New Chat'}
  return (
    <div className={css(sheet.div)}>
      <h2>Chats</h2>
      <Table basic='very' celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
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