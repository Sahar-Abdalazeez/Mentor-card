import { useState } from 'react';
import styled from 'styled-components';
import "../fonts/SpaceGrotesk-Bold.ttf"
import "../fonts/SpaceGrotesk-SemiBold.ttf"

const Container = styled.div`
  margin-bottom:20px;
  min-block-size: fit-content;
  border-width: 1px;
`;

const Label = styled.div`
  text-align: left;
  align-self: baseline;
  margin-bottom: 10px;
  font-family: "Medium";
  font-size: 14px;
  letter-spacing: 2px ;
`;

const InputField = styled.input`
  background-color: white;
  border-width: 1px;
  height: 40px;
  border-radius: 10px;
  padding:10px 12px;
  width:100%;
  font-size: 18px;
`;
const Error = styled.text`
color: red;
font-size:14px ;
`;
export const Input = (props) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <Container style={props.style}>
      <Label>{props.label}</Label>
      <InputField onBlur={() => setIsFocused(false)} onFocus={() => setIsFocused(true)} style={props.error ? { borderColor: 'red' } : isFocused ? { borderColor: '   hsl(278, 94%, 30%)' } : { borderColor: ' hsl(270, 3%, 87%)' }} placeholder={props.placeholder} maxLength={props.type === 'card' ? 16 : ''} onChange={(text) => props.onChange(text)} value={props.value} />
      <Error>{props.error}</Error>
    </Container>
  )
}