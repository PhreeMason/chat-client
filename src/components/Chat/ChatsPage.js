import React from 'react';
import {connect} from 'react-redux';
import {getChats} from '../../redux/modules/Chats/actions'
import {Grid} from 'semantic-ui-react'
import ChatList from './ChatList'
import PropTypes from 'prop-types'
import ChatShow from './ChatShow'

class ChatPage extends React.Component {
  
  componentDidMount() {
    this.props.getChats()
  }

  handleClick=(chat)=>{
    alert('work in progress')
  }

  render() {
    return (
      <Grid columns={2} padded>
        <Grid.Column>
          <h1>Chats</h1>
          <ChatList chats={this.props.chats} handleClick={this.handleClick} />
        </Grid.Column>
        <Grid.Column>
          {this.props.currentChat.status !== null? 
            <ChatShow chat={this.props.currentChat.chatroom}/>
            : null}
        </Grid.Column> 
      </Grid>
    );
  }
}

ChatPage.propTypes = {
  chats: PropTypes.array.isRequired,
  getChats: PropTypes.func.isRequired,
};


function mapStateToProps(state, ownProps) {
  return {
  	chats: state.chats.chats,
    currentChat: state.chat
  }
} 

export default connect(mapStateToProps, {getChats})(ChatPage);  