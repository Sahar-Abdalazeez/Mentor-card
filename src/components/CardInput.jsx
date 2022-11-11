import React from "react";
import styled from "styled-components";

const Container = styled.div`
  
`;
const Input = styled.input`
  background-color: transparent;
  width: 100%;
  border-width: 0px;
  font-size: 30px;
  pointer-events:none ;
`;


export const CardInput = ({ style, value }) => {
  return (
    <Container>
      <Input style={style} id="inputID" value={value} placeholder="0000000000000000" />
    </Container>
  )
};
