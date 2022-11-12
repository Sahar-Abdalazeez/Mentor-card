import styled from 'styled-components';
import "../fonts/SpaceGrotesk-Bold.ttf"
import "../fonts/SpaceGrotesk-SemiBold.ttf"

const Container = styled.div`
  margin-bottom:30px;
  min-block-size: fit-content;
  border-width: 1px;
`;

const Label = styled.div`
  text-align: left;
  align-self: baseline;
  margin-bottom: 10px;
  font-family: "Medium";
  font-size: 18px;
`;

const InputField = styled.input`
  background-color: white;
  border: solid 1px #bfbfbf;
  height: 40px;
  border-radius: 10px;
  padding:10px 12px;
  width:100%;
  font-size: 18px;

`;

export const Input = (props) => {
  return (
    <Container style={props.style}>
      <Label>{props.label}</Label>
      <InputField placeholder={props.placeholder} maxLength={props.type === 'card' ? 16 : ''} onChange={(text) => props.onChange(text)} value={props.value} />
    </Container>
  )
}