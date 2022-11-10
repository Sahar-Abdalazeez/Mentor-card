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

export const Right = (props) => {
    return (
        <RightContainer>
            <DetailsContainer>
                <Input label="CARDHOLDER NAME:" placeholder="ex: Jane Appleseed"
                    onChange={(name) => {
                        props.onNameChange(name)
                    }} />
                <Input label="CARD NUMBER:" placeholder="1234 5678 9123 0000"
                    onChange={(num) => {
                        props.onNumChange(num)
                    }} />
                <InputsContainer>
                    <DateLabelContainer>
                        <Label>EXP,DATE (MM/YY)</Label>
                        <DateContainer>
                            <Input style={{ width: 100, marginRight: 20 }} placeholder="MM" onChange={(month) => {
                                props.onMonthChange(month)
                            }} />
                            <Input style={{ width: 100 }} placeholder="YY" onChange={(year) => {
                                props.onCVCChange(year)
                            }}
                            />
                        </DateContainer>
                    </DateLabelContainer>
                    <Input style={{ width: 500 }} label="CVC" placeholder="e.g 123" onChange={(cvc) => {
                        props.onCVCChange(cvc)
                    }} />
                </InputsContainer>
            </ DetailsContainer >
        </RightContainer >
    );
}