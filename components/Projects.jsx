import React from 'react';
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
            <Description>I'm constantly thinking of app & game ideas that spark my interest, so here's all the ones I couldn't leave as ideas and brought to life.</Description>
            <SelectedProjects/>
        </Container>
    );
}

export default Projects;
