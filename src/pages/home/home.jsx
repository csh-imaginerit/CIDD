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
        name: 'About',
        id: 1,
        width: '30%'
      },
      {
        name: 'System',
        id: 2,
        width: '50%'
      },
      {
        name: 'Entertainment',
        id: 3,
        width: '80%'
      },
      {
        name: 'Components',
        id: 4,
        width: '50%'
      },
      {
        name: 'Computer Science House',
        id: 5,
        width: '30%'
      }
    ];

    return options.map((item, index) =>
      <OptionBox content={item.id} style={{width: item.width}}>
        <a>{item.name}</a>
      </OptionBox>
    );
  }

  render() {
    return (
      <Container>
        <Header>
          Computerized Autonomous Roadster
        </Header>
        <OptionsContainer>
          {this.renderOptions()}
        </OptionsContainer>
      </Container>
    );
  }
}

export default Home;