import React from 'react';
import {connect} from 'react-redux';
import {getChats} from '../../redux/modules/Chats/actions'
import {Grid} from 'semantic-ui-react'
import ChatList from './ChatList'
import PropTypes from 'prop-types'
import ChatShow from './ChatShow'

class ChatPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      currentChat: null
    }
  }

  componentDidMount() {
    this.props.getChats()
  }

  handleClick=(chat)=>{
    this.setState({
      currentChat: chat
    })
  }

  render() {
    return (
      <Grid columns={2} padded>
        <Grid.Column>
          <h1>Chats</h1>
          <ChatList chats={this.props.chats} handleClick={this.handleClick} />
        </Grid.Column>
        <Grid.Column>
          {this.state.currentChat !== null ? 
            <ChatShow chat={this.state.currentChat}/>
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
  	chats: state.chats.chats
  }
} 

export default connect(mapStateToProps, {getChats})(ChatPage);  