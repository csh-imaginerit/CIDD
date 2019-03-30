import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Header, OptionsContainer, OptionBox, Instructions } from './styledComponents';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.connection = new WebSocket('ws://127.0.0.1:5000', 'stream');
    this.connection.onmessage = this.handleOnMessage;
    this.connection.onopen = this.handleOnOpen;
  }

  handleOnOpen = () => {
    console.warn('Connected!');
    this.connection.send('MY MESSAGE');
  }

  handleOnMessage(message) {
      console.warn(message);
  }

  renderOptions() {
    const options = [
      {
        name: 'Client site',
        path: '/client'
      },
      {
        name: 'Transport driver site',
        path: '/transport'
      },
      {
        name: 'Customer Clerk site',
        path: '/clerk'
      }
    ];

    return options.map((item, index) =>
      <OptionBox>
        <NavLink to={item.path}>{item.name}</NavLink>
      </OptionBox>
    );
  }

  render() {
    return (
      <Container>
        <Header>
          Sample project
        </Header>
        <Instructions>
          Choose the portal that fits your use case
        </Instructions>
        <OptionsContainer>
          {this.renderOptions()}
        </OptionsContainer>
      </Container>
    );
  }
}

export default Home;