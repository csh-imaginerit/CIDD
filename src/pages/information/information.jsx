import React, {Component} from 'react';

import About from '../../assets/about.jpg';

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return <img src={About} style={{width: '100vw', height: '100vh'}}/>
  }
}

export default Information;