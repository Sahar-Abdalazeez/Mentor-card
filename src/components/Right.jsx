import { useState } from "react";
import styled, { css } from "styled-components";
import { Input } from "../components/Input";
import { Done } from '../components/Done';
import { useWindowSize } from '../utils/screen.utils';
import { splitCardNum } from '../utils/card.utils'

const RightContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
    ${props => {
        if (props.isMobile) {
            return css`
        min-width:300px ;
        justify-content: center;
        `;
        }
        else {
            return css`
             justify-content:center;
             align-items: center;
             min-width:600px ;

        `
        }
    }}
`;

const InputsContainer = styled.div`
  display: flex;
   flex: 1;
  width: 100%;
  justify-content: center;
  align-items:center ;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  width:${props => props.isMobile ? '60%' : '80%'};
  margin-right:${props => props.isMobile ? 0 : 50}px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: ${props => props.isMobile ? 300 : 400}px;
  margin-left:${props => props.isMobile ? 30 : ''}px;
`;
const DateLabelContainer = styled.div``;

const Label = styled.div`
  font-family: "Medium";
  font-size: 14px;
  letter-spacing: 2px;
  height: 20px;
  width: 100%;
`;
const Confirm = styled.button`
  width: "100%";
  height: 50px;
  background-color: hsl(278, 68%, 11%);
  border-radius: 10px;
  border-color: hsl(278, 68%, 11%);
  margin-top: 30px;
`;

export const Right = (props) => {
    const regex = /^[0-9]+$/;
    const isMobile = useWindowSize();
    const [completed, setCompleted] = useState(false);
    const [fieldsValues, setFieldsValues] = useState({
        name: "",
        number: "",
        month: "",
        year: "",
        cvc: "",
    });
    // const [focus, setFocus] = useState({ name: false, number: false, month: false, year: false, cvc: false });
    const [error, setError] = useState({
        name: false,
        number: false,
        month: false,
        year: false,
        cvc: false,
    });

    const getError = () => {
        if (!fieldsValues.name.length) {
            setError((prevError) => ({ ...prevError, name: "can't be empty" }));
        }
        if (!fieldsValues.number.length) {
            setError((prevError) => ({ ...prevError, number: "can't be empty" }));
        }
        if (!fieldsValues.number.match(regex)) {
            setError((prevError) => ({ ...prevError, number: "numbers only allowed " }));
        }
        if (!fieldsValues.month.length) {
            setError((prevError) => ({ ...prevError, month: "can't be empty" }));
        }
        if (!fieldsValues.year.length) {
            setError((prevError) => ({ ...prevError, year: "can't be empty" }));
        }
        if (!fieldsValues.cvc.length) {
            setError((prevError) => ({ ...prevError, cvc: "can't be empty" }));
        }
        else {
            setCompleted(true)
        }

    };
    return (
        <RightContainer isMobile={isMobile} style={props.style}>
            {!completed ?
                <DetailsContainer isMobile={isMobile}>
                    <Input style={{ width: '100%' }}
                        error={error.name}
                        label="CARDHOLDER NAME:"
                        placeholder="ex: Jane Appleseed"
                        onChange={(name) => {
                            props.onNameChange(name);
                            setError((prevError) => ({ ...prevError, name: false }));

                            setFieldsValues((prevActivatedItem) => ({
                                ...prevActivatedItem,
                                name: name.target.value,
                            }));
                        }}
                    />
                    <Input
                        value={fieldsValues.number}
                        error={error.number}
                        isFocused={true}
                        type="card"
                        label="CARD NUMBER:"
                        placeholder="1234 5678 9123 0000"
                        onChange={(num) => {
                            props.onNumChange(num);
                            setError((prevError) => ({ ...prevError, number: false }));

                            setFieldsValues((prevActivatedItem) => ({
                                ...prevActivatedItem,
                                number: (num.target.value),
                            }));
                        }}
                    />
                    <Label>EXP.DATE (MM/YY)</Label>

                    <InputsContainer>


                        <DateLabelContainer>
                            <DateContainer isMobile={isMobile}>
                                <Input
                                    error={error.month}
                                    style={{ width: 100, marginRight: 20 }}
                                    placeholder="MM"
                                    onChange={(month) => {
                                        props.onMonthChange(month);
                                        setError((prevError) => ({ ...prevError, month: false }));

                                        setFieldsValues((prevActivatedItem) => ({
                                            ...prevActivatedItem,
                                            month: month.target.value,
                                        }));
                                    }}
                                />
                                <Input
                                    error={error.year}
                                    style={{ width: 100 }}
                                    placeholder="YY"
                                    onChange={(year) => {
                                        props.onYearChange(year);
                                        setError((prevError) => ({ ...prevError, year: false }));

                                        setFieldsValues((prevActivatedItem) => ({
                                            ...prevActivatedItem,
                                            year: year.target.value,
                                        }));
                                    }}
                                />
                            </DateContainer>
                        </DateLabelContainer>
                        <Input
                            style={{ marginRight: 10 }}
                            error={error.cvc}
                            label="CVC"
                            placeholder="e.g 123"
                            onChange={(cvc) => {
                                props.onCVCChange(cvc);
                                setError((prevError) => ({ ...prevError, cvc: false }));
                                setFieldsValues((prevActivatedItem) => ({
                                    ...prevActivatedItem,
                                    cvc: cvc.target.value,
                                }));
                            }}
                        />
                    </InputsContainer>
                    <Confirm
                        title="Confirm"
                        style={{ color: "white", fontSize: 18 }}
                        onClick={() => getError()}
                    >
                        Confirm
                    </Confirm>
                </DetailsContainer> : <Done />}
        </RightContainer>
    );
};
