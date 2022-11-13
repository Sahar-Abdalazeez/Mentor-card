import { useState } from "react";
import styled from "styled-components";
import { Input } from "../components/Input";

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
  justify-content: space-between;
  flex: 1;
  width: 100%;
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-right: 50px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 400px;
`;
const DateLabelContainer = styled.div``;

const Label = styled.div`
  font-family: "Medium";
  font-size: 14px;
  letter-spacing: 2px;
`;
const Confirm = styled.button`
  width: "100%";
  height: 50px;
  background-color: hsl(278, 68%, 11%);
  border-radius: 10px;
  border-color: hsl(278, 68%, 11%);
`;
// const ConfirmText =

export const Right = (props) => {
    const regex = /^[0-9]+$/;
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
    console.log('completed', completed)
    return (
        <RightContainer>
            {!completed ?
                <DetailsContainer>
                    <Input
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
                                number: num.target.value,
                            }));
                        }}
                    />
                    <InputsContainer>
                        <DateLabelContainer>
                            <Label>EXP.DATE (MM/YY)</Label>
                            <DateContainer>
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
                            error={error.cvc}
                            style={{ width: 500 }}
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
                </DetailsContainer> : <Label>done</Label>}
        </RightContainer>
    );
};
