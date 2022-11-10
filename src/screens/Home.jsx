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
    return (
        <Container>
            <Left />
            <Right
                onNumChange={(num) => console.log("this is testing ", num.target.value)}
                onNameChange={(name) =>
                    console.log("this is testing ", name.target.value)
                }
                onMonthChange={(month) => console.log(month.target.value)}
                onYearChange={(year) => console.log(year.target.value)}
                onCVCChange={(cvc) => console.log(cvc.target.value)}

            />
            <ColoredCard

                cardNum={4111111111111}
                style={{ position: "absolute", zIndex: 2, top: 200, left: 200 }}
            />
            <BlackCard
                style={{ position: "absolute", zIndex: 2, top: 500, left: 280 }}
            />
        </Container>
    );
};
