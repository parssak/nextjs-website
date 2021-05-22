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
                <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis velit sunt enim nulla perspiciatis exercitationem id eos ea veritatis! Pariatur odio consequuntur, laborum voluptates aspernatur neque ducimus impedit soluta qui, necessitatibus corrupti quam reprehenderit. Facere cum deserunt eos amet reiciendis ipsam, ipsum sapiente nemo illum nam similique laudantium. In, enim?</Description>
            </div>
            <div className="p-media">
                <img src="/media/mix_3.png" />
                <img src="/media/mix_1.png" />
                <img src="/media/mix_2.png" />
            </div>
            <div className="p-tech">
                <HorizontalContent tech={"React • ExpressJS • MongoDB"} role={"Creator"} date={"2020"} />
            </div>
        </ProjectContainer>
    );
}

export default MixBot;
