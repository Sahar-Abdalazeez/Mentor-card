import React from "react";
import styled from "styled-components";
import { useWindowSize } from '../utils/screen.utils'
const Container = styled.div`
  
`;
const Input = styled.input`
  background-color: transparent;
  width: 100%;
  border-width: 0px;
  font-size: ${props => props.isMobile ? 20 : 30}px;
  pointer-events:none ;
`;


export const CardInput = ({ style, value }) => {
  const isMobile = useWindowSize();
  return (
    <Container>
      <Input isMobile={isMobile} style={style} id="inputID" value={value} placeholder="0000000000000000" />
    </Container>
  )
};
