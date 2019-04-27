import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';

import { Container, ColumnFlex, RowFlex, Logo, OptionBox, OptionLabel, SmImg, BigImg } from '../baseComponents';
import Spotify from '../../assets/spotify.png';
import Netflix from '../../assets/netflix.svg';
import Youtube from '../../assets/youtube.png';

class Entertainment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <RowFlex>
                    <div>
                        <OptionBox style={{marginTop: '250px', padding: '10px'}}>
                            <Logo src={Youtube} />
                        </OptionBox>
                        <OptionLabel>Youtube</OptionLabel>
                    </div>
                    <RowFlex>
                        <ColumnFlex>    
                            <Logo src={Spotify} />
                            <OptionLabel>Spotify</OptionLabel>
                        </ColumnFlex>
                    </RowFlex>
                    <div>
                        <OptionBox style={{marginTop: '250px', padding: '10px'}}>
                            <Logo src={Netflix} />
                        </OptionBox>
                        <OptionLabel>Netflix</OptionLabel>
                    </div>
                </RowFlex>
            </Container>
        );
    }
}

export default Entertainment;