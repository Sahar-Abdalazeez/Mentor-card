import styled from 'styled-components';

const LeftContainer = styled.div`
 height: 100%;
 width: 400px;
 display: flex;
`;


export const Left = () => {
    return (

        <LeftContainer >
            <img className="profile-photo" src={require("../assets/images/bg-main-desktop.png")} alt={"Carlie Anglemire"} />
        </LeftContainer>);
}