import React from 'react';
import MessageList from './message-list';
import MessageForm from './message-form';
import { connect } from 'react-redux';

class Chat extends React.Component {

  // set proper component name
  displayName: 'Chat'

  render() {
    const { dispatch } = this.props;

    return (
      <div className='chat-window'>
        <MessageList {...this.props} />
        <MessageForm onSubmit={ message => dispatch(add(message)) }/>
      </div>
    );
  }
}

function add(message) {
  return {
    type: 'ADD_MESSAGE',
    payload: {
      message,
    },
  };
}

function select(state) {
  return {
    messages: state.messages,
  };
}

export default connect(select)(Chat);
