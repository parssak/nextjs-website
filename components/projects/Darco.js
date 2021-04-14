import React from 'react';
import HorizontalContent from '../HorizontalContent';
import NextProject from '../NextProject';
import { Container, SectionTitle, Description, Subtitle, Title, HorizontalContentWrapper } from '../styles';

const Darco = () => {
    return (
        <Container>
            <Title larger>Darco</Title>
            <Subtitle>iPad App</Subtitle>
            <br /><br />
            <Description><b>Convert any PDF to dark mode with ease</b></Description>
            <br /><br />
            <Description>My first commerical project, and a project I hold very dear to my heart, as shipping a commerical game as a newly budding solo game developer was no easy feat.<br /><br /> Kazakan was made with C# in Unity, and I did all the artwork in Aseprite. I released Kazakan for mobile, and I wrote an article on Medium about my experience developing it.</Description>
            <br />
            <HorizontalContent tech={"ReactJS • TypeScript • PDF.JS • Swift"} role={"Creator • Developer"} date="2020"/>
            <NextProject nextProjectName={'mixbot'} />
        </Container>
    );
}

export default Darco;
