import React, {Component} from 'react';

import { Container, Header, OptionsContainer, OptionBox, Instructions, OptionLabel } from './styledComponents';
import Headset from '../../assets/headset.svg';
import Stopclock from '../../assets/stopclock.svg';
import Tools from '../../assets/tools.svg';
import Help from '../../assets/help.svg';


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
        img: Help
      },
      {
        name: 'System',
        id: 2,
        img: Stopclock
      },
      {
        name: 'Entertainment',
        id: 3,
        img: Headset
      },
      {
        name: 'Components',
        id: 4,
        img: Tools
      }
      // {
      //   name: 'Computer Science House',
      //   id: 5,
      //   width: '30%'
      // }
    ];
    const {hovered} = this.props;
  
    return options.map((item, index) =>
      <div>
        <OptionBox key={index} hovered={item.id === hovered}>
          <img src={item.img}></img>
        </OptionBox>
        <OptionLabel hovered={item.id === hovered}>{item.name}</OptionLabel>
      </div>
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