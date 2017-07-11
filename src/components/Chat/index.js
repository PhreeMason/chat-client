import React from 'react';
import ChatList from './ChatList'
import ChatShow from './ChatShow'
import {Grid} from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom';

const ChatsNew = () => (<h3>New Chat</h3>)

const Chat = ({match}) => {
  return (
    <Grid columns={2} padded>
      <Grid.Column>
        <ChatList/>
      </Grid.Column>
        <Switch>
          <Route path={`${match.url}/new`} component={ChatsNew} />
          <Route path={`${match.url}/:chatId`} component={ChatShow}/>
        </Switch>  
    </Grid>
  );
}

export default Chat;