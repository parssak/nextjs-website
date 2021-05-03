import React from 'react';
import Contact from './Contact';
import { Container, Description, LinkText, SectionTitle, Subtitle, Title, TitleBall } from './styles';

const About = () => {
    return (
        <Container>
            <Title larger>About Me<TitleBall delay={1.3} duration={0.8} random={Math.random() * 360} /></Title>
            <Subtitle>It's nice to meet you</Subtitle>
            <SectionTitle>Hi, I'm Parssa.</SectionTitle>
            <Description >
                I'm a second year <LinkText>@UofT</LinkText> for Math + CS.
                <br />
                <br />
                I'm currently working <LinkText>@AirborneApp</LinkText> as a fullstack developer.
            </Description>
            <Description>
                I love being creative, and bringing ideas to life through code. I'm passionate about everything design/frontend related. I'm constantly improving and learning new skills and technologies, and tinkering around with them. 
            </Description>
            <Description>

            </Description>
            <Contact/>
        </Container>
    );
}

export default About;
