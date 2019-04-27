import React, {Component} from 'react';
import { Container, ColumnFlex, Logo, RowFlex, OptionBox, OptionLabel, SmImg, BigImg } from '../baseComponents';
import Dir from '../../assets/dir.png';
import CV from '../../assets/cv.jpg';
import Hand from '../../assets/hand.png';


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
                        <Logo src={Dir} />
                    </OptionBox>
                    <OptionLabel>Directional AC</OptionLabel>
                </div>
                <RowFlex>
                    <ColumnFlex>    
                        <Logo src={CV} />
                        <OptionLabel>Computer's Vision</OptionLabel>
                    </ColumnFlex>
                </RowFlex>
                <div>
                    <OptionBox style={{marginTop: '250px', padding: '10px'}}>
                        <Logo src={Hand} />
                    </OptionBox>
                    <OptionLabel>Gesture Detection</OptionLabel>
                </div>
            </RowFlex>
    </Container>);
    }
}

export default Components;