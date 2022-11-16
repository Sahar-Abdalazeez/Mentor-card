import React, { useState } from "react";
import styled from "styled-components";
import { Left } from "../../components/Left";
import { Right } from "../../components/Right";
import { ColoredCard } from "../../components/ColoredCard";
import { BlackCard } from "../../components/BlackCard";
import { splitCardNum } from '../../utils/card.utils';

const Container = styled.div`
  display: flex;
  flex:1;
  height:100vh;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const HomeMobile = () => {
    const [number, setNumber] = useState('0000000000000000');
    const [name, setName] = useState('JANE APPLEASES');
    const [month, setMonth] = useState('00');
    const [year, setYear] = useState('00');
    const [cvc, setCvc] = useState('');



    return (
        <Container>
            <Left style={{
                height: 250, width: 375
            }} />
            <BlackCard
                cvc={cvc}
                style={{ position: "absolute", zIndex: 2, top: 30, left: '15%' }}
            />
            <ColoredCard
                cardNum={splitCardNum(number)}
                cardName={name}
                expMonth={month}
                expYear={year}
                style={{
                    position: "absolute", zIndex: 2, top: 133, left: '3%'
                }}
            />
            <Right
                style={{ marginTop: 100, display: 'flex', height: '100%' }}
                onNumChange={(num) => setNumber(num.target.value)}
                onNameChange={(name) => setName(name.target.value)}
                onMonthChange={(month) => setMonth(month.target.value)}
                onYearChange={(year) => setYear(year.target.value)}
                onCVCChange={(cvc) => setCvc(cvc.target.value)}
            />


        </Container>
    );
};
