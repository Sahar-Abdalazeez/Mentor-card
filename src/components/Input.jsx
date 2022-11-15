import { useState } from "react";
import styled from "styled-components";
//fonts
import "../fonts/SpaceGrotesk-Bold.ttf";
import "../fonts/SpaceGrotesk-SemiBold.ttf";
//util
import { useWindowSize } from "../utils/screen.utils";

const Container = styled.div`
  margin-bottom: 20px;
  min-block-size: fit-content;
  margin-bottom: ${(props) => (props.error ? 0 : 20)}px;
`;

const Label = styled.div`
  text-align: left;
  align-self: baseline;
  margin-bottom: 10px;
  font-family: "Medium";
  font-size: 14px;
  letter-spacing: 2px;
  height: 20px;
`;

const InputField = styled.input`
  border-width: 0px;
  height: 38px;
  border-radius: 10px;
  padding: 10px 12px;
  width: 100%;
  font-size: 18px;
`;

const Error = styled.text`
  color: red;
  font-size: 14px;
  height: 20px;
  width: 100%;
`;

const InputContainer = styled.div`
  height: 40px;
  display: flex;
  border: solid 1px black;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Input = (props) => {
  const isMobile = useWindowSize();
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Container error={props.error} isMobile={isMobile} style={props.style}>
      <Label>{props.label}</Label>
      <InputContainer
        style={
          props.error
            ? { borderColor: "red" }
            : isFocused
              ? { borderColor: "   hsl(278, 94%, 30%)" }
              : { borderColor: " hsl(270, 3%, 87%)" }
        }
      >
        <InputField
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          onChange={(text) => props.onChange(text)}
          value={props.value}
        />
      </InputContainer>
      <Error>{props.error || ""}</Error>
    </Container>
  );
};
