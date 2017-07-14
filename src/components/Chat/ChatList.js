import React from 'react'
import { Header, Image, Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Batman from '../../images/icons/Batman.svg'
import Beach from '../../images/icons/Beach.svg'
import Alien from '../../images/icons/Alien.svg' 
import { StyleSheet, css } from 'aphrodite';

const sheet = StyleSheet.create({
  div:{
    height: '100%',
    overflowY: 'auto'

  }
})
const images = [Batman, Beach, Alien]

const ChatList = (props) =>{
  const chats = props.chats
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
          {chats.map((chat, idx) => 
            <Table.Row key={idx}>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={images[idx]} size='mini' />
                  <Header.Content>
                    {chat.name}
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                <Button
                as={ Link } to={`/chats/${chat.id}/${chat.name.replace(/ /g, "-")}`}
                inverted color='orange' 
                content={chat.members} 
                icon='angle right' labelPosition='right' 
                 />
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ChatList