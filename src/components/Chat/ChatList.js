import React from 'react';
import PropTypes from 'prop-types'
import { Header, Image, Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Batman from '../../images/icons/Batman.svg'
import Beach from '../../images/icons/Beach.svg'
import Alien from '../../images/icons/Alien.svg'
import { getChats } from '../../redux/modules/Chats/actions' 

const images = [Batman, Beach, Alien]

class ChatList extends React.Component {

  componentDidMount() {
    this.props.getChats()  
  }

  render() {
    const {chats} = this.props
    return (
      <div>
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
                  as={ Link } to={`/chats/${chat.id}`}
                  inverted color='orange' 
                  content={chat.chatroom_users.length} 
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
}


ChatList.propTypes = {  
  chats: PropTypes.array.isRequired,
  getChats: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    chats: state.chats.chats
  }
}

export default connect(mapStateToProps, { getChats })(ChatList)