import React, { useState } from "react";
import styled from "styled-components";
import { Left } from "../../components/Left";
import { Right } from "../../components/Right";
import { ColoredCard } from "../../components/ColoredCard";
import { BlackCard } from "../../components/BlackCard";
import { splitCardNum } from '../../utils/card.utils';
const Container = styled.div`
  display: flex;
  height: 929px;
  flex-direction: row;
  position: relative;
`;

export const HomeDesktop = () => {
    const [number, setNumber] = useState('0000000000000000');
    const [name, setName] = useState('JANE APPLEASES');
    const [month, setMonth] = useState('00');
    const [year, setYear] = useState('00');
    const [cvc, setCvc] = useState('');

    return (
        <Container>
            <Left />
            <Right
                onNumChange={(num) => setNumber(num.target.value)}
                onNameChange={(name) => setName(name.target.value)}
                onMonthChange={(month) => setMonth(month.target.value)}
                onYearChange={(year) => setYear(year.target.value)}
                onCVCChange={(cvc) => setCvc(cvc.target.value)}
            />
            <ColoredCard
                cardNum={splitCardNum(number)}
                cardName={name}
                expMonth={month}
                expYear={year}

                style={{ position: "absolute", zIndex: 2, top: 200, left: '10%' }}
            />
            <BlackCard
                style={{ position: "absolute", zIndex: 2, top: 500, left: '15%' }}
            />
        </Container>
    );
};
