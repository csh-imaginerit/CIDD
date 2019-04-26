import React, { Component } from 'react';

import {
  Home, Information, System, Entertainment, Components, CSH
} from './pages';

const screens = ['HOME', 'HOME', 'SYSTEM', 'ENTERTAINMENT', 'COMPONENTS', 'CSH']

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'HOME',
      hovered: 1
    };

    this.handleOnMessage = this.handleOnMessage.bind(this);
    console.warn(window);
    this.connection = new WebSocket(window.location.hostname === 'localhost' ? 'ws://127.0.0.1:8080' : 'ws://castr-castr.cs.house');
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
        case 'BACK':
          this.protocolBack();
          break;
        case 'NEXT':
          this.protocolNext();
          break;
        case 'SELECT':
          this.protocolSelect();
          break;
        case 'VOICE':
          console.warn(message.data);
          break;
        default:
      }
  }

  protocolChange(screen, tokens) {
    this.setState({selected: screen});
  }

  protocolSelect() {
    const {selected, hovered} = this.state;
    if (selected == 'HOME') {
      this.setState({selected: screens[hovered], hovered: 1});
    }
  }

  protocolNext() {
    const {selected, hovered} = this.state;
    if (selected == 'HOME') {
      if(hovered == 5) {
        this.setState({hovered: 1});
      } else {
        this.setState({hovered: hovered + 1});
      }
    }
  }

  protocolBack() {
    const {selected, hovered} = this.state;
    if (selected == 'HOME') {
      if(hovered == 1) {
        this.setState({hovered: 5});
      } else {
        this.setState({hovered: hovered - 1});
      }
    } else {
      this.setState({selected: 'HOME', hovered: 1})
    }
  }

  render() {
    const {selected, hovered} = this.state;
    console.warn(this.state);
    switch (selected) {
      case 'ABOUT':
        return <Information />
      case 'SYSTEM':
        return <System />
      case 'COMPONENTS':
        return <Components />
      case 'CSH':
        return <CSH />
      case 'ENTERTAINMENT':
        return <Entertainment />
      case 'HOME':
      default:
        return <Home hovered={hovered}/>
    }
  }
}

export default App;
