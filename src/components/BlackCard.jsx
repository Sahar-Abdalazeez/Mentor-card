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


export const BlackCard = ({ style }) => {
    const isMobile = useWindowSize();
    return (<Container isMobile={isMobile} style={style}>
        <Card isMobile={isMobile} style={{
            backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPositionX: 'center', backgroundPositionY: 'center'

        }} />
    </Container>)

}