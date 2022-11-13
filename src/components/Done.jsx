import { useState } from "react";
import styled from "styled-components";
import { Input } from "../components/Input";
import { ReactComponent as ReactLogo } from '../assets/images/icon-complete.svg';



const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 400px;
  /* background-color: red; */
  justify-content:center ;
  align-items: center;
`;

const Title = styled.text`
  color: hsl(278, 68%, 11%);
  font-size: 30px;
  font-family:"Medium" ;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const Description = styled.text`
  color: hsl(279, 6%, 55%);
  font-family: 'Medium';

`;
const Continue = styled.button`
  width: 100%;
  height: 50px;
  background-color: hsl(278, 68%, 11%);
  border-radius: 10px;
  border-color: hsl(278, 68%, 11%);
  margin-top: 50px;
`;
export const Done = () => {

    return (
        <DetailsContainer>
            <ReactLogo />
            <Title>THANK YOU! </Title>
            <Description>We've added your card details </Description>
            <Continue style={{ color: "white", fontSize: 18, fontFamily: 'Medium' }} >Continue</Continue>
        </DetailsContainer>
    )
}
