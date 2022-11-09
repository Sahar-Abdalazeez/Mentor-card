import React from 'react';
import styled from 'styled-components';
import background from "../assets/images/bg-card-front.png";
const Container = styled.div`
`;
const Card = styled.div`
background-color:transparent ;
 height: 240px;
 width: 420px;
 padding:20px;
 border-radius: 10px;

`;
const CirclesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width:20%;
  justify-content: space-between;

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
export const ColoredCard = ({ style }) => {
    return (
        <Container style={style}>
            <Card style={{
                backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPositionX: 'center', backgroundPositionY: 'center'

            }} >
                <CirclesContainer>
                    <LargeCircle />
                    <SmallCircle />
                </CirclesContainer>

            </Card>
        </Container>
    )
}