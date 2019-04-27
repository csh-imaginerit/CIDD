import React, {Component} from 'react';

import Speed from '../../assets/speed.gif';
import Headset from '../../assets/headset.svg';
import Battery from '../../assets/battery.svg';


import { Container, ColumnFlex, RowFlex, OptionBox, OptionLabel, SmImg, BigImg } from '../baseComponents';


class System extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <RowFlex>
                    <div>
                        <OptionBox style={{marginTop: '250px', padding: '10px'}}>
                            <SmImg src={Battery} />
                        </OptionBox>
                        <OptionLabel>Charge</OptionLabel>
                    </div>
                    <RowFlex>
                        <ColumnFlex>    
                            <BigImg src={Speed} />
                            <OptionLabel>Speed</OptionLabel>
                        </ColumnFlex>
                    </RowFlex>
                    <div>
                        <OptionBox style={{marginTop: '250px', padding: '10px'}}>
                            <SmImg src={Headset} />
                        </OptionBox>
                        <OptionLabel>Systems</OptionLabel>
                    </div>
                </RowFlex>
            </Container>
        );    
    }
}

export default System;