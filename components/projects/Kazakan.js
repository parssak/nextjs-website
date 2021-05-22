import React from 'react';
import styled from 'styled-components';
import HorizontalContent from '../HorizontalContent';
import { Container, Subtitle, Title, Description } from '../styles';

const ProjectContainer = styled(Container)`
    display: grid;
    gap: 1rem;
    /* .p-title { grid-area: p-title; }
    .p-description { grid-area: p-description; }
    .p-media { grid-area: p-media; & > * {margin-bottom:1rem;}}
    .p-media-2 { grid-area: p-media-2; }
    .p-tech { grid-area: p-tech; } */
    img {
        width: 100%;
    }
    .p-media img {
        margin-bottom: 1rem;
    }
    @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.4fr 0.8fr 1.5fr;
    grid-template-areas:
      "p-title p-media"
      "p-description p-media"
      "p-tech p-media";
    .p-title { grid-area: p-title; }
    .p-description { grid-area: p-description; }
    .p-media { grid-area: p-media;}
    .p-media-2 { grid-area: p-media-2; }
    .p-tech { grid-area: p-tech; }
    }
`;
const Kazakan = () => {
    return (
        <ProjectContainer>
            <div className="p-title">
                <Title larger>Kazakan</Title>
                <Subtitle>Mobile Game</Subtitle>
                <br /><br />
            </div>
            <div className="p-description">
                <Description><b>A top-down shooter game where you protect the Orb from waves of enemies.</b></Description>
                <br /><br />
                    <Description className="priority-2">My first commercial project, and played a pivotal role in making me the developer I am today.</Description>
                <Description>Kazakan was made with C# in Unity, and I did all the artwork in Aseprite. I released Kazakan for mobile, and I wrote an article on Medium about my experience developing it.</Description>
                <br />
            </div>
            <div className="p-media">
                <img src="/media/kaz_3.png" />
                <img src="/media/kaz_1.png" />
                <img src="/media/kaz_2.png" />
            </div>
            <div className="p-tech">
                <HorizontalContent tech={"C# • Unity • Aseprite"} role={"Creator • Game Developer"} date={"2020"} />
            </div>
        </ProjectContainer>
    );
}

export default Kazakan;
