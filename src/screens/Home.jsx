import React, { useState } from "react";
import styled from "styled-components";
import { Left } from "../components/Left";
import { Right } from "../components/Right";
import { ColoredCard } from "../components/ColoredCard";
import { BlackCard } from "../components/BlackCard";
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 929px;
  flex-direction: row;
  position: relative;
`;

export const Home = () => {
    const [number, setNumber] = useState('0000 0000 0000 0000');
    const [name, setName] = useState('JANE APPLEASES');
    const [date, setDate] = useState({ month: '00', year: '00' });
    const [cvc, setCvc] = useState('');

    return (
        <Container>
            <Left />
            <Right
                onNumChange={(num) => setNumber(num.target.value)}
                onNameChange={(name) => setName(name.target.value)}
                onMonthChange={(month) => setDate({ month: month.target.value })}
                onYearChange={(year) => setDate({ year: year.target.value })}
                onCVCChange={(cvc) => setCvc(cvc.target.value)}
            />
            <ColoredCard
                cardNum={number}
                cardName={name}
                expMonth={date.month}
                expYear={date.year}
                cv

                style={{ position: "absolute", zIndex: 2, top: 200, left: 200 }}
            />
            <BlackCard
                style={{ position: "absolute", zIndex: 2, top: 500, left: 280 }}
            />
        </Container>
    );
};
