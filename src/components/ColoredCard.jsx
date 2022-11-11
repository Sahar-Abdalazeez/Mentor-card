import React from 'react';
import styled from 'styled-components';
import background from "../assets/images/bg-card-front.png";
import { CardInput } from './CardInput';
const Container = styled.div`
`;
const Card = styled.div`
background-color:transparent ;
 height: 220px;
 width: 420px;
 padding:30px;
 border-radius: 10px;

`;
const CirclesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width:23%;
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
  font-size: 14px;
  color:white ;
  text-transform: uppercase;
`;

const Date = styled.div`
    color:white ;
    justify-content:center ;
    align-items: center;
    font-size: 14px;
`;
const Details = styled.div`
display: flex;
flex-direction: row;
  justify-content:space-between;
  align-items: center;
  padding-right: 30px;
  margin-top: 30px
`;
export const ColoredCard = ({ style, cardNum, cardName, expMonth, expYear }) => {
  return (
    <Container style={style}>
      <Card style={{
        backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPositionX: 'center', backgroundPositionY: 'center'

      }} >
        <CirclesContainer>
          <LargeCircle />
          <SmallCircle />
        </CirclesContainer>
        <CardInput value={(cardNum)} style={{ color: 'white' }} />
        <Details>
          <Name>{cardName} </Name>
          <Date> {`${expMonth}/${expYear}`} </Date>
        </Details>
      </Card>
    </Container>
  )
}