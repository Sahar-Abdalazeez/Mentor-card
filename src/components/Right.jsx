import { useState } from "react";
import styled, { css } from "styled-components";
//components
import { Input } from "../components/Input";
import { Done } from "../components/Done";
//util
import { useWindowSize } from "../utils/screen.utils";

const RightContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${(props) => {
        if (props.isMobile) {
            return css`
        min-width: 300px;
        justify-content: center;
        align-items: center;
      `;
        } else {
            return css`
        justify-content: center;
        align-items: center;
        min-width: 600px;
      `;
        }
    }}
`;

const InputsContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => (props.isMobile ? "70%" : "60%")};
  margin-right: ${(props) => (props.isMobile ? 10 : 0)}px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: ${(props) => (props.isMobile ? 300 : 400)}px;
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
    const [error, setError] = useState({
        name: false,
        number: false,
        month: false,
        year: false,
        cvc: false,
    });

    const getError = () => {
        //name validation
        if (!fieldsValues.name.length) {
            setError((prevError) => ({ ...prevError, name: "Can't be blank" }));
        } else {
            setError((prevError) => ({ ...prevError, name: false }));
        }

        //card number validation
        if (!fieldsValues.number.length) {
            setError((prevError) => ({ ...prevError, number: "Can't be blank" }));
        } else if (!fieldsValues.number.match(regex)) {
            setError((prevError) => ({
                ...prevError,
                number: "Wrong format ,numbers only  ",
            }));
        } else {
            setError((prevError) => ({
                ...prevError,
                number: false,
            }));
        }

        //month validation
        if (!fieldsValues.month.length) {
            setError((prevError) => ({ ...prevError, month: "Can't be blank" }));
        } else if (fieldsValues.month > 12 || fieldsValues.month < 1) {
            setError((prevError) => ({ ...prevError, month: "Can't be blank" }));
        } else {
            setError((prevError) => ({ ...prevError, month: false }));
        }

        //year validation
        if (!fieldsValues.year.length) {
            setError((prevError) => ({ ...prevError, year: "Can't be blank" }));
        } else {
            setError((prevError) => ({ ...prevError, year: false }));
        }
        //cvc validation
        if (!fieldsValues.cvc.length) {
            setError((prevError) => ({ ...prevError, cvc: "Can't be blank" }));
        } else {
            setError((prevError) => ({ ...prevError, cvc: false }));
        }
    };

    return (
        <RightContainer isMobile={isMobile} style={props.style}>
            {!completed ? (
                <DetailsContainer isMobile={isMobile}>
                    <Input
                        style={{ width: "100%" }}
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
                        maxLength={16}
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
                                number: num.target.value,
                            }));
                        }}
                    />

                    <InputsContainer>
                        <DateContainer isMobile={isMobile}>
                            <Input
                                label="EXP.DATE(MM/YY)"
                                error={error.month}
                                style={isMobile ? { width: 90, marginRight: 5 } : { width: 100, marginRight: 10 }}
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
                                style={isMobile ? { width: 90, marginRight: 20 } : { width: 100, marginRight: 10 }}
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
                        <Input
                            maxLength={3}
                            style={{ width: '100%', marginLeft: isMobile ? 0 : 20, marginRight: 0, }}
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
                        onClick={() => {
                            getError();
                            if (
                                !error.cvc &&
                                fieldsValues.cvc &&
                                !error.month &&
                                fieldsValues.month &&
                                !error.name &&
                                fieldsValues.name &&
                                !error.number &&
                                fieldsValues.number &&
                                !error.year &&
                                fieldsValues.year
                            ) {
                                setCompleted(true);
                            } else {
                                setCompleted(false);
                            }
                        }}
                    >
                        Confirm
                    </Confirm>
                </DetailsContainer>
            ) : (
                <Done continueClicked={() => {
                    setCompleted(false);
                    setFieldsValues({ name: '', number: '', cvc: '', month: '', year: '' });
                    window.location.reload();
                }} />
            )}
        </RightContainer>
    );
};
