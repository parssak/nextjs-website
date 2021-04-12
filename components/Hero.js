import styled from 'styled-components';
import NavBar from './NavBar';

import { Title, Description, Container, ContactButton } from './styles';

const HeroContainer = styled(Container)`
    background: radial-gradient(40.29% 68% at 91.8% 8.73%, #5C47DF 0%, rgba(20, 16, 222, 0) 100%), radial-gradient(100.15% 86.93% at 50% -23.2%, #9B5C21 0%, rgba(171, 108, 50, 0) 100%);
    display: flex;
    flex-direction: column;
    `

const Subtitle = styled.h2`
    color: #c0c0c0;
    font-weight:400;
    font-size: 2.6rem;
    margin: 0;
    margin-bottom: 4rem;
    margin-top: -0.5rem;
    letter-spacing: -0.05rem;
     @media (max-width: 800px) {
        font-size: ${2}rem;
    }
    @media (max-width: 565px) {
        font-size: ${1.3}rem;
    }
`

const size = 800
const Ball = styled.div`
    width: ${size}px;
    height: ${size}px;
    background-color: red;
    border-radius: 100%;
    position: absolute;
    top: -200px;
    right: -100px;
    z-index: -1;
    background: radial-gradient(120.64% 80.49% at 49.9% 23.98%, rgba(88, 135, 255, 0) 51.66%, #951EBF 100%), radial-gradient(76.84% 51.26% at 49.9% 18.45%, #6951FF 0%, #5B1EBF 100%);
`
const HeroTitle = styled(Title)`
    background: linear-gradient(271.88deg, #9C9AFF 3.74%, #BDACDD 61.1%, #FFD19A 105.72%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const Hero = () => {
    return (
        <HeroContainer>
            <NavBar />
            <HeroTitle larger>Hi. I'm Parssa</HeroTitle>
            <Subtitle>Fullstack Developer & Designer</Subtitle>
            <Description>Based in Toronto, Canada 📍</Description>
            <Description>I’m passionate about creating useful tools through software.</Description>
            <ContactButton>Get In Touch</ContactButton>
            <Ball/>
        </HeroContainer>
    );
}

export default Hero;
