import React, {Component} from 'react';
import { Container, ColumnFlex, Logo, RowFlex, OptionBox, OptionLabel, SmImg, BigImg } from '../baseComponents';
import Speed from '../../assets/speed.gif';
import Headset from '../../assets/headset.svg';
import Battery from '../../assets/battery.svg';


class Components extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <Container>
            <RowFlex>
                <div>
                    <OptionBox style={{marginTop: '250px', padding: '10px'}}>
                        <Logo src={Battery} />
                    </OptionBox>
                    <OptionLabel>Directional AC</OptionLabel>
                </div>
                <RowFlex>
                    <ColumnFlex>    
                        <Logo src={Speed} />
                        <OptionLabel>Computer's Vision</OptionLabel>
                    </ColumnFlex>
                </RowFlex>
                <div>
                    <OptionBox style={{marginTop: '250px', padding: '10px'}}>
                        <Logo src={Headset} />
                    </OptionBox>
                    <OptionLabel>Gesture Detection</OptionLabel>
                </div>
            </RowFlex>
    </Container>);
    }
}

export default Components;