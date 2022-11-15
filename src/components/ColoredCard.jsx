import React from 'react';
import styled from 'styled-components';
import background from "../assets/images/bg-card-front.png";
import { CardInput } from './CardInput';
import { useWindowSize } from "../utils/screen.utils";

const Container = styled.div`
 height: ${props => props.isMobile ? 100 : 220}px;
 width: ${props => props.isMobile ? 280 : 420}px;
`;
const Card = styled.div`
background-color:transparent ;
 padding:${props => props.isMobile ? 15 : 30}px;
 border-radius: 10px;

`;
const CirclesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width:${props => props.isMobile ? '33%' : '23%'};
  justify-content: space-between;
  margin-bottom:${props => props.isMobile ? 20 : 50}px;

`;
const LargeCircle = styled.div`
background-color: white;
width: 40px;
height: 40px;
border-radius: 50px;
`;
const SmallCircle = styled.div`
background-color: transparent;
width: 20px;
height: 20px;
border: 1px solid white;
border-radius: 50px;
`;
const Name = styled.text`
color: white;
font-size: 14px;
color: white;
text-transform: uppercase;
`;

const Date = styled.div`
color: white;
justify-content: center;
align-items: center;
font-size: 14px;
`;
const Details = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-right: 30px;
margin-top:${props => props.isMobile ? 20 : 30}px;
`;
export const ColoredCard = ({ style, cardNum, cardName, expMonth, expYear }) => {
  const isMobile = useWindowSize();
  return (
    <Container isMobile={isMobile} style={style}>
      <Card isMobile={isMobile} style={{
        backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPositionX: 'center', backgroundPositionY: 'center'

      }} >
        <CirclesContainer isMobile={isMobile}>
          <LargeCircle />
          <SmallCircle />
        </CirclesContainer>
        <CardInput value={(cardNum)} style={{ color: 'white', }} />
        <Details isMobile={isMobile}>
          <Name>{cardName} </Name>
          <Date> {`${expMonth} /${expYear}`} </Date >
        </Details >
      </Card >
    </Container >
  )
}