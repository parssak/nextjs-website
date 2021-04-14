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
            <SectionTitle>Who Am I? </SectionTitle>
            <Description>Hi, I'm Parssa. I'm a second year student at the University of Toronto for Mathematics, Computer Science, and Statistics. </Description>
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
