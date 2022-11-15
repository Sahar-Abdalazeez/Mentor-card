import React from 'react';
import styled from 'styled-components';
import background from "../assets/images/bg-card-back.png";
import { useWindowSize } from '../utils/screen.utils'
const Card = styled.div`
background-color:transparent ;
 height: ${props => props.isMobile ? 180 : 240}px;
 width: ${props => props.isMobile ? 280 : 420}px;
 padding:20px;
 border-radius: 10px;

`;
const Container = styled.div`
 width: ${props => props.isMobile ? 220 : 420}px;
`;

const Cvc = styled.text`
position: absolute ;
left: 83%;
top: 107px;
color: white;
`;

export const BlackCard = (props) => {
    const isMobile = useWindowSize();
    return (<Container isMobile={isMobile} style={props.style}>
        <Card isMobile={isMobile} style={{
            backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPositionX: 'center', backgroundPositionY: 'center'

        }}>
            <Cvc >{props.cvc || '000'}</Cvc>
        </Card>
    </Container>)

}