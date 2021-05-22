import React from 'react';
import HorizontalContent from '../HorizontalContent';
import { Container, Description, SectionTitle, Subtitle, Title } from '../styles';

const MixBot = () => {
    return (
        <Container>
            <Title larger>MixBot</Title>
            <Subtitle>Web App</Subtitle>
            <br /><br />
            <SectionTitle><b>Your personal DJ</b></SectionTitle>
            <br /><br />
            <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis velit sunt enim nulla perspiciatis exercitationem id eos ea veritatis! Pariatur odio consequuntur, laborum voluptates aspernatur neque ducimus impedit soluta qui, necessitatibus corrupti quam reprehenderit. Facere cum deserunt eos amet reiciendis ipsam, ipsum sapiente nemo illum nam similique laudantium. In, enim?</Description>
            <HorizontalContent tech={"React • ExpressJS • MongoDB"} role={"Creator"} date={"2020"} />
        </Container>
    );
}

export default MixBot;
