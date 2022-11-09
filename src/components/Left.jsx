import styled from 'styled-components';
import { ColoredCard } from '../components/ColoredCard';

const LeftContainer = styled.div`
 height: 100%;
 width: 400px;
 display: flex;

`;

const CreditCard = styled(ColoredCard)`
position: absolute;
width: 400px;
z-index:2;
`;

export const Left = () => {
    return (

        <LeftContainer >
            {/* <CreditCard ></CreditCard> */}
            <img className="profile-photo" src={require("../assets/images/bg-main-desktop.png")} alt={"Carlie Anglemire"} />
        </LeftContainer>);
}