import styled from 'styled-components';
import NavBar from './NavBar';
import { Title, Description, Container, ContactButton, gradient } from './styles';

const HeroContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    @media (max-width: 800px) {
        margin-top: 0rem;
    }
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

const size = 500
const Ball = styled.div`
    width: ${size}px;
    height: ${size}px;
    background-color: red;
    border-radius: 100%;
    position: absolute;
    top: 50px;
    right: -150px;
    z-index: -1;
    background: radial-gradient(120.64% 80.49% at 49.9% 23.98%, rgba(88, 135, 255, 0) 51.66%, #951EBF 100%), radial-gradient(76.84% 51.26% at 49.9% 18.45%, #6951FF 0%, #5B1EBF 100%);
`
const HeroTitle = styled(Title)`
    background: ${gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Bg = styled.img`
    position: absolute;
    top: 0;
    left: -25vw;
    transform-origin: 0 0 ;
    transform: scale(1.2)
`
const Hero = () => {
    return (
        <HeroContainer>
            <Bg src="/bg.svg"/>
            <HeroTitle larger>Hi. I'm Parssa</HeroTitle>
            <Subtitle>Fullstack Developer & Designer</Subtitle>
            <Description>Based in Toronto, Canada 📍</Description>
            <Description>I’m passionate about creating useful tools through software.</Description>
            <ContactButton style={{marginTop: `5rem`}}>Get In Touch</ContactButton>
            <Ball/>
        </HeroContainer>
    );
}

export default Hero;
