import React from 'react'
import { Header, Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ChatLink = (props) =>{
  const {chat, create} = props
  return (
    <Table.Row>
      <Table.Cell>
        <Header as='h4'>
          <Header.Content>
            {chat.name}
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>
        <Button
        as={ Link } to={create?'/chats/new' 
        : `/chats/${chat.id}/${chat.name.replace(/ /g, "-")}`}
        inverted color='orange' 
        content={chat.members} 
        icon='angle right' labelPosition='right' 
         />
      </Table.Cell>
    </Table.Row>
  );
}

export default ChatLink
