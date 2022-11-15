import styled from "styled-components";
import { ReactComponent as ReactLogo } from '../assets/images/icon-complete.svg';
import { useWindowSize } from '../utils/screen.utils'


const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: ${props => props.isMobile ? 375 : 400}px;
  justify-content:center ;
  align-items: center;
  padding:${props => props.isMobile ? 20 : 0}px
`;

const Title = styled.text`
  color: hsl(278, 68%, 11%);
  font-size: 30px;
  font-family:"Medium" ;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const Description = styled.text`
  color: hsl(279, 6%, 55%);
  font-family: 'Medium';

`;
const Continue = styled.button`
  width: 100%;
  height: 50px;
  background-color: hsl(278, 68%, 11%);
  border-radius: 10px;
  border-color: hsl(278, 68%, 11%);
  margin-top: 50px;
`;
export const Done = () => {
  const isMobile = useWindowSize();
  return (
    <DetailsContainer isMobile={isMobile}>
      <ReactLogo />
      <Title>THANK YOU! </Title>
      <Description>We've added your card details </Description>
      <Continue style={{ color: "white", fontSize: 18, fontFamily: 'Medium' }} >Continue</Continue>
    </DetailsContainer>
  )
}
