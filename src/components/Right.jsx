import { useState } from 'react';
import styled from 'styled-components';
import { Input } from '../components/Input';

const RightContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-width: 600px;
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
  min-width:400px ;
`;
const DateLabelContainer = styled.div`
  
`;

const Label = styled.div`
/* font-family:'SpaceGrotesk-' ; */
`;

export const Right = (props) => {
    const [cardNum, setCardNum] = useState();
    return (
        <RightContainer>
            <DetailsContainer>
                <Input label="CARDHOLDER NAME:" placeholder="ex: Jane Appleseed"
                    onChange={(name) => {
                        props.onNameChange(name)
                    }} />
                <Input type="card" label="CARD NUMBER:" placeholder="1234 5678 9123 0000"
                    onChange={(num) => {
                        props.onNumChange(num);
                    }} />
                <InputsContainer>
                    <DateLabelContainer>
                        <Label>EXP.DATE (MM/YY)</Label>
                        <DateContainer>
                            <Input style={{ width: 100, marginRight: 20 }} placeholder="MM" onChange={(month) => {
                                props.onMonthChange(month)
                            }} />
                            <Input style={{ width: 100 }} placeholder="YY" onChange={(year) => {
                                props.onYearChange(year)
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