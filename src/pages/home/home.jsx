import React, {Component} from 'react';

import { Container, Header, OptionsContainer, OptionBox, Instructions } from './styledComponents';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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
        <a>{item.name}</a>
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