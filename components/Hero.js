import styled from 'styled-components';
import { Title, Subtitle, Description, Container, ContactButton, gradient } from './styles';

const HeroContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
        margin-top: 0rem;
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

`

const Bg = styled.img`
    position: absolute;
    top: 0;
    left: -25vw;
    transform-origin: 0 0 ;
    transform: scale(1.2);
    z-index: -1;
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
