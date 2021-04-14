import React from 'react';
import NextProject from '../NextProject';
import { Container, SectionTitle, Description, Subtitle, Title } from '../styles';

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
            <SectionTitle>Technologies Used</SectionTitle>
            <Description>ReactJS • TypeScript • PDF.JS • Swift</Description>
            <SectionTitle>Role</SectionTitle>
            <Description>Creator • Developer</Description>
            
            <NextProject nextProjectName={'mixbot'} />
        </Container>
    );
}

export default Darco;
