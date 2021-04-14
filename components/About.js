import React from 'react';
import Contact from './Contact';
import { Container, Description, SectionTitle, Subtitle, Title } from './styles';

const About = () => {
    return (
        <Container>
            <Title larger>About Me</Title>
            <Subtitle>It's nice to meet you</Subtitle>
            <br/>
            <br/>
            <br/>
            <SectionTitle>Hi, I'm Parssa.</SectionTitle>
            <Description>I'm a second year @ UofT for Math + CS.</Description>
            <Description>
            </Description>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laboriosam nisi mollitia optio hic nihil illum? Obcaecati tempore atque repellat consectetur soluta cumque fugit. Fuga, culpa molestiae! Perspiciatis eligendi nostrum quibusdam deleniti necessitatibus, laudantium mollitia aperiam rerum! Adipisci quibusdam eius ducimus mollitia maiores. Nulla ab dolore iure ut, at repudiandae.
            </Description>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laboriosam nisi mollitia optio hic nihil illum? Obcaecati tempore atque repellat consectetur soluta cumque fugit. Fuga, culpa molestiae! Perspiciatis eligendi nostrum quibusdam deleniti necessitatibus, laudantium mollitia aperiam rerum! Adipisci quibusdam eius ducimus mollitia maiores. Nulla ab dolore iure ut, at repudiandae.
            </Description>
            <Contact/>
        </Container>
    );
}

export default About;
