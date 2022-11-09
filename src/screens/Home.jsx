import styled from 'styled-components';
import { Left } from '../components/Left';
import { Right } from '../components/Right';
import { ColoredCard } from '../components/ColoredCard';
import { BlackCard } from '../components/BlackCard';
const Container = styled.div`
  display: flex;
  width:  100%;
  height: 929px;
  flex-direction: row;
  position: relative;
`;

export const Home = () => {
    return (
        <Container >
            <Left />
            <Right />
            <ColoredCard style={{ position: "absolute", zIndex: 2, top: 200, left: 200 }} />
            <BlackCard style={{ position: "absolute", zIndex: 2, top: 500, left: 280 }} />
        </Container>
    )
}