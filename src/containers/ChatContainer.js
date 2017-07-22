import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { getChats } from '../redux/modules/Chats/actions' 
import {Grid} from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom';
import ChatList from '../components/Chat/ChatList'
import ChatShow from '../components/Chat/ChatShow'
import ChatsNew from '../components/Chat/ChatsNew'

class ChatContainer extends React.Component {

  componentDidMount() {
    this.props.getChats()
  }

  render() {
    const { chats, apiCable, match, username} = this.props
    return (
    <Grid padded>
      <Grid.Column width={6}>
        <ChatList chats={chats} username={username} handleClick={this.handleClick}/>
      </Grid.Column>
        <Switch>
          <Route path={`${match.url}/new`} component={ChatsNew} />
          <Route path={`${match.url}/:chatId/:chatName`} render={(props)=> <ChatShow {...props} currentUsername={username} apiCable={apiCable}/> }/>
        </Switch>  
    </Grid>
    );
  }
}


ChatContainer.propTypes = {  
  chats: PropTypes.array.isRequired,
  getChats: PropTypes.func.isRequired,
  apiCable: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    chats: state.chats.chats,
    username: state.auth.currentUser.username,
  }
}

export default connect(mapStateToProps, { getChats })(ChatContainer)