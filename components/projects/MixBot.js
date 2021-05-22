import React from 'react';
import HorizontalContent from '../HorizontalContent';
import { Description, ProjectContainer, SectionTitle, Subtitle, Title } from '../styles';

const MixBot = () => {
    return (
        <ProjectContainer>
            <div className="p-title">
                <Title larger>MixBot</Title>
                <Subtitle>Web App</Subtitle>
                <br /><br />
            </div>
            <div className="p-description">
                <SectionTitle><b>Your personal DJ</b></SectionTitle>
                <br /><br />
                <Description>MixBot acts as your personal DJ. MixBot finds songs to mix, loads songs onto two Decks, and mixes an entire DJ set. You can select from 3 different types of mixes, then Mixbot will fetch songs through the Spotify and YouTube APIs, and mixes them using the WebAudio API.</Description>
            </div>
            <div className="p-media">
                <img src="/media/mix_1.png" />
                <img src="/media/mix_3.png" />
                <img src="/media/mix_2.png" />
            </div>
            <div className="p-tech">
                <HorizontalContent tech={"React • Express • MongoDB • Electron"} role={"Creator"} date={"2020"} />
            </div>
        </ProjectContainer>
    );
}

export default MixBot;
