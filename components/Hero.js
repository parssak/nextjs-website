import styled from 'styled-components';
import { Title, Subtitle, Description, Container, ContactButton, gradient } from './styles';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const HeroContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    & > *:not(h1) {
    opacity: 0;
    }
    overflow-x: overflow;
    `


const size = 500
const Ball = styled.div`
    /* width: ${size}px;
    height: ${size}px; */
    height: 597px;
    width: 800px;
    border-radius: 200%;
    position: absolute;
    top: 50px;
    left: 0%;
    /* right: -150px; */
    z-index: -1;
    filter: blur(5rem);
    opacity: 1 !important;
   
    background: radial-gradient(49.71% 101.93% at -1.54% -2.07%, #5C47DF 0%, rgba(20, 16, 222, 0) 100%), radial-gradient(116.82% 101.4% at 76.73% -23.2%, #DC7D25 0%, rgba(171, 108, 50, 0) 100%);

`

const Hero = () => {
    const ref = useRef(null)
    // const ball = useRef(null)
    useEffect(() => {
        console.log(ref.current.children)
        let t1 = gsap.timeline();
        let children = [...ref.current.children]
        children.shift()
        children.pop()
        t1.fromTo(children, { opacity: 0 }, { opacity: 1, stagger: 0.4, duration: 0.6, ease: "power1.inOut" })
    }, [])

    return (
        <HeroContainer ref={ref}>
            <Title larger>
                Hi. I'm Parssa
                <Ball  />
            </Title>
            <Subtitle>Fullstack Developer & Designer</Subtitle>
            <Description>Based in Toronto, Canada 📍</Description>
            <Description>Passionate about creating useful tools through software.</Description>
            <ContactButton style={{ marginTop: `5rem` }}>Get In Touch</ContactButton>
        </HeroContainer>
    );
}

export default Hero;
