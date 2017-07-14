import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { getChats } from '../redux/modules/Chats/actions' 
import {Grid} from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom';
import ChatList from '../components/Chat/ChatList'
import ChatShow from '../components/Chat/ChatShow'

const ChatsNew=()=> <h1>New Chat </h1>


class ChatContainer extends React.Component {

  componentDidMount() {
    this.props.getChats()
    if (!this.props.apiCable.messenger) {
      this.props.apiCable.messenger = this.props.apiCable.subscriptions.create('ChatroomsChannel',{
      connected: function() { console.log("cable: connected") },             // onConnect 
      disconnected: function() { console.log("cable: disconnected") },       // onDisconnect 
      received: (data) => { console.log("cable received: ", data); }         // OnReceive
    }) 
    } 
  }

  componentWillUnmount() {
    this.props.apiCable.messenger.unsubscribe
  }

  render() {
    const {chats, apiCable, match} = this.props
    return (
    <Grid columns={2} padded>
      <Grid.Column>
        <ChatList chats={chats}/>
      </Grid.Column>
        <Switch>
          <Route path={`${match.url}/new`} component={ChatsNew} />
          <Route path={`${match.url}/:chatId/:chatName`} render={(props)=> <ChatShow {...props} chats={chats} apiCable={apiCable}/> }/>
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
    chats: state.chats.chats
  }
}

export default connect(mapStateToProps, { getChats })(ChatContainer)