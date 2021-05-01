import React from 'react';
import NextProject from '../NextProject';
import HorizontalContent from '../HorizontalContent';
import { Container, Subtitle, Title, Description } from '../styles';

const MixBot = () => {
    return (
        <Container>
            <Title larger>Kazakan</Title>
            <Subtitle>Mobile Game</Subtitle>
            <br /><br />
            <Description><b>A top-down shooter game where you protect the Orb from waves of enemies.</b></Description>
            <br /><br />
            <Description>My first commerical project, and played a pivotal role in making me the developer I am today.<br /><br /> Kazakan was made with C# in Unity, and I did all the artwork in Aseprite. I released Kazakan for mobile, and I wrote an article on Medium about my experience developing it.</Description>
            <br />
            <HorizontalContent tech={"C# • Unity • Aseprite"} role={"Creator • Game Developer"} date={"2020"}/>
            <NextProject nextProjectName={'darco'} />
        </Container>
    );
}

export default MixBot;
