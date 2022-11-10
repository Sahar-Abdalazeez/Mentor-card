import React from 'react';
import styled from 'styled-components';
import background from "../assets/images/bg-card-front.png";
import { CardInput } from './CardInput';
const Container = styled.div`
`;
const Card = styled.div`
background-color:transparent ;
 height: 240px;
 width: 420px;
 padding:30px;
 border-radius: 10px;

`;
const CirclesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width:20%;
  justify-content: space-between;
  margin-bottom: 50px;

`;
const LargeCircle = styled.div`
  background-color:white;
  width: 40px;
  height: 40px;
  border-radius: 50px;
`;
const SmallCircle = styled.div`
  background-color:transparent ;
  width: 20px;
  height: 20px;
  border: 1px solid white;
  border-radius: 50px;
`;
const Name = styled.text`
  color: white;
  font-size: 20px;
  color:white ;
`;

const Date = styled.text`
    color:white ;

`;
const Details = styled.div`
display: flex;
flex-direction: row;
  background-color:red ;
  justify-content:space-between;
  align-items: center;
  padding-right: 30px;
  margin-top: 30px
`;
export const ColoredCard = ({ style, cardNum, cardName, cardExp }) => {
  return (
    <Container style={style}>
      <Card style={{
        backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPositionX: 'center', backgroundPositionY: 'center'

      }} >
        <CirclesContainer>
          <LargeCircle />
          <SmallCircle />
        </CirclesContainer>
        <CardInput value={cardNum} />
        <Details>
          <Name>{cardName} </Name>
          <Date>{cardExp}</Date>
        </Details>
      </Card>
    </Container>
  )
}