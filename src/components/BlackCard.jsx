import React from "react";
import styled from "styled-components";
//image 
import background from "../assets/images/bg-card-back.png";
//util
import { useWindowSize } from "../utils/screen.utils";

const Card = styled.div`
  background-color: transparent;
  height: ${(props) => (props.isMobile ? 180 : 240)}px;
  width: ${(props) => (props.isMobile ? 280 : 420)}px;
  padding: 20px;
  border-radius: 10px;
`;

const Container = styled.div`
  width: ${(props) => (props.isMobile ? 220 : 420)}px;
  position: relative;
`;

const Cvc = styled.text`
  position: absolute;
  z-index: 1;
  left: ${(props) => (props.isMobile ? 230 : 350)}px;
  top: ${(props) => (props.isMobile ? 80 : 107)}px;
  color: white;
`;

export const BlackCard = (props) => {
    const isMobile = useWindowSize();
    return (
        <Container isMobile={isMobile} style={props.style}>
            <Card
                isMobile={isMobile}
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                }}
            >
                <Cvc isMobile={isMobile}>{props.cvc || "000"}</Cvc>
            </Card>
        </Container>
    );
};
