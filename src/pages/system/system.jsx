import React, {Component} from 'react';

import Speed from '../../assets/speed.gif';

class System extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>system<img src={Speed}/></div>
    }
}

export default System;