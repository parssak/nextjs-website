import React from 'react';
import { Container, Description, LinkText, SectionTitle, Subtitle, Title, TitleBall } from './styles';

const About = () => {
    return (
        <Container>
            <Title larger>About Me<TitleBall delay={1.3} duration={0.8} random={Math.random() * 360} /></Title>
            <Subtitle>It's nice to meet you</Subtitle>
            <SectionTitle>Hi, I'm Parssa</SectionTitle>
            <Description >
                I'm a fullstack developer <LinkText href="https://www.airborneapp.io/" target="_about">@AirborneApp</LinkText>.
                <br/>
                I'm also a Math/CS student <LinkText target="_about">@UofT</LinkText>.
            </Description>
            <Description>
                I love being creative, and bringing ideas to life through code. I'm passionate about everything frontend & design related, and I put emphasis on UX and accessibility. I'm constantly learning new skills and technologies, and tinkering with them. 
            </Description>
        </Container>
    );
}

export default About;
