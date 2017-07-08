import React from 'react';
import {connect} from 'react-redux';
import * as chatActions from '../../redux/modules/Chats/actions'
import {Grid} from 'semantic-ui-react'
import ChatList from './ChatList'
import PropTypes from 'prop-types'

class ChatPage extends React.Component {


  componentDidMount() {
    console.log('i am here')
    console.error(this.props)
    this.props.getChats()
  }

  render() {
    return (
      <Grid columns={3} padded>
        <Grid.Column>
          <h1>Chats</h1>
          <ChatList chats={this.props.chats}/>
        </Grid.Column>
        <Grid.Column>
          
        </Grid.Column>
        <Grid.Column>
          
        </Grid.Column>  
      </Grid>
    );
  }
}

ChatPage.propTypes = {
  chats: PropTypes.array.isRequired
};

const mapDispatchToProps = () => {
  return {
    getChats: chatActions.getChats
  };
};


function mapStateToProps(state, ownProps) {
  return {
  	chats: state.chats.chats
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);  