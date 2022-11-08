import styled from 'styled-components';
import { Left } from '../components/Left';
import { Right } from '../components/Right';
import { ColoredCard } from '../components/ColoredCard';

const Container = styled.div`
  display: flex;
  width:  100%;
  height: 929px;
  flex-direction: row;
`;

const CreditCard = styled(ColoredCard)`
/* position: absolute;
z-index: 2; */
width: 400px;
`;
export const Home = () => {
    return (
        <Container >
            <Left />
            <Right />
            <CreditCard />
        </Container>
    )
}