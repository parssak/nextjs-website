import React from 'react';
import ProjectDetails from './ProjectDetails';
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
                <Description><b>Your personal DJ.</b></Description>
                <br /><br />
                <Description>MixBot acts as your personal DJ. MixBot finds songs to mix, loads songs onto two Decks, and mixes an entire DJ set. You can select from 3 different types of mixes, then Mixbot will fetch songs through the Spotify and YouTube APIs, and mixes them using the WebAudio API.</Description>
            </div>
            <div className="p-media">
                <img src="/media/mix_1.png" />
                <img src="/media/mix_3.png" />
                <img src="/media/mix_2.png" />
            </div>
            <div className="p-tech">
                <ProjectDetails tech={"React • Express • MongoDB • Electron"} role={"Creator"} date={"Winter 2020"} />
            </div>
        </ProjectContainer>
    );
}

export default MixBot;
