import React from 'react';

export default class ChatShow extends React.Component {

  render() {
    return (
      <div>{this.props.chat.name || 7}</div>
    );
  }
}
