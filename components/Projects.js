import React from 'react';
import Contact from './Contact';
import SelectedProjects from './SelectedProjects';
import { Container, Description, Subtitle, Title, TitleBall } from './styles';

const Projects = () => {
    return (
        <Container>
            <Title larger>
                Projects
                 <TitleBall delay={1.3} duration={0.8} random={Math.random() * 360}/>
            </Title>
            <Subtitle>The things I've done</Subtitle>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque facilis architecto non illo itaque cumque nisi error voluptatibus cupiditate!</Description>
            <SelectedProjects/>
            <Contact/>
        </Container>
    );
}

export default Projects;
