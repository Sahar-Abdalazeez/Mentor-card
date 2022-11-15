import styled from "styled-components";
//util
import { useWindowSize } from "../utils/screen.utils";

const LeftContainer = styled.div`
  height: ${(props) => (props.isMobile ? "20%" : "100%")};
  display: flex;
  min-width: ${(props) => (props.isMobile ? 375 : 480)}px;
`;

export const Left = (props) => {
    const isMobile = useWindowSize();

    return (
        <LeftContainer isMobile={isMobile} style={props.style}>
            <img
                className="profile-photo"
                src={require("../assets/images/bg-main-desktop.png")}
                alt={"Carlie Anglemire"}
            />
        </LeftContainer>
    );
};
