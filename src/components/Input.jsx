import styled from 'styled-components';

const Container = styled.div`
  margin-bottom:30px;
  min-block-size: fit-content;
  border-width: 1px;
`;

const Label = styled.div`
  text-align: left;
  align-self: baseline;
  margin-bottom: 10px;
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
      <InputField placeholder={props.placeholder} onChange={(text) => props.onChange(text)} />
    </Container>
  )
}