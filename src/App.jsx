import React, { Component } from 'react';

import {
  Home, Information
} from './pages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: ['HOME']
    };

    this.handleOnMessage = this.handleOnMessage.bind(this);

    this.connection = new WebSocket('ws://127.0.0.1:5000');
    this.connection.onmessage = this.handleOnMessage;
    this.connection.onopen = this.handleOnOpen;
  }

  handleOnOpen = () => {
    console.warn('Connected!');
  }

  handleOnMessage(message) {
      console.warn(message);
      const tokens = message.data.split('|');

      switch (tokens[0]) {
        case 'CHANGE':
          this.protocolChange(tokens[1], tokens);
          break;
        default:
      }
  }

  protocolChange(screen, tokens) {
    const {stack, update} = this.state;
    if(screen !== stack[stack.length - 1]) {
      stack.push(screen);
      console.warn(stack);
      this.setState({update: update + 1});
    }
  }

  render() {
    const {stack} = this.state;
    console.warn(this.state);
    switch (stack[stack.length - 1]) {
      case 'INFORMATION':
        return <Information />
      case 'HOME':
      default:
        return <Home />
    }
  }
}

export default App;
