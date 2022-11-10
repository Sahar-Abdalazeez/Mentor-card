import React from "react";
import styled from "styled-components";

const Container = styled.div`
  
`;
const Input = styled.input`
  background-color: transparent;
  width: 100%;
  border-width: 0px;
  font-size: 30px;
`;


export const CardInput = ({ style, value }) => {
  return (
    <Container style={style}>
      <Input id="inputID" value={value} placeholder="0000  0000  0000  0000" placeholderColor='green' />
    </Container>
  )
};
