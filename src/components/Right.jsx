import styled from 'styled-components';
import { Input } from '../components/Input';

const RightContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const InputsContainer = styled.div`
 display: flex;
 justify-content:space-between ;
  flex:1;
  width: 100%;
`;

const DateContainer = styled.div`
 display: flex;
justify-content: space-between;
align-items: center;
width:80%;
margin-right: 50px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;
const DateLabelContainer = styled.div`
  
`;
const Label = styled.div``;

export const Right = () => {
    return (
        <RightContainer>
            <DetailsContainer>
                <Input label="CARDHOLDER NAME:" placeholder="ex: Jane Appleseed" />
                <Input label="CARD NUMBER:" placeholder="1234 5678 9123 0000" />
                <InputsContainer>
                    <DateLabelContainer>
                        <Label>EXP,DATE (MM/YY)</Label>
                        <DateContainer>
                            <Input style={{ width: 100, marginRight: 20 }} placeholder="MM" />
                            <Input style={{ width: 100 }} placeholder="YY" />
                        </DateContainer>
                    </DateLabelContainer>
                    <Input style={{ width: 500 }} label="CVC" placeholder="e.g 123" />
                </InputsContainer>
            </ DetailsContainer >
        </RightContainer >
    );
}