import styled from 'styled-components';
import { Title, Subtitle, Description, Container, ContactButton, gradient } from './styles';
import {gsap} from 'gsap';
import { useEffect, useRef } from 'react';
const HeroContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    & > *:not(h1) {
    opacity: 0;
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
const Hero = () => {
    const ref = useRef(null)
    const ball = useRef(null)
    useEffect(() => {
        console.log(ref.current.children)
        let t1 = gsap.timeline();
        let children = [...ref.current.children]
        children.shift()
        t1.fromTo(children,{opacity: 0}, { opacity: 1, stagger: 0.4, duration: 0.6, ease: "power1.inOut" })
    }, [])

    return (
        <HeroContainer ref={ref}>
            <Title larger>Hi. I'm Parssa</Title>
            <Subtitle>Fullstack Developer & Designer</Subtitle>
            <Description>Based in Toronto, Canada 📍</Description>
            <Description>Passionate about creating useful tools through software.</Description>
            <ContactButton style={{marginTop: `5rem`}}>Get In Touch</ContactButton>
            <Ball ref={ball}/>
        </HeroContainer>
    );
}

export default Hero;
