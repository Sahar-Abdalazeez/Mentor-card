import React from 'react';
import styled from 'styled-components';
import background from "../assets/images/bg-card-back.png";

const Card = styled.div`
background-color:transparent ;
 height: 240px;
 width: 420px;
 padding:20px;
 border-radius: 10px;

`;
const Container = styled.div``;


export const BlackCard = ({ style }) => {
    return (<Container style={style}>
        <Card style={{
            backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPositionX: 'center', backgroundPositionY: 'center'

        }} />
    </Container>)

}