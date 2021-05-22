import React from 'react';
import HorizontalContent from '../HorizontalContent';
import { ProjectContainer, Subtitle, Title, Description } from '../styles';

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
                <img src="/media/kaz_1.png" />
                <img src="/media/kaz_3.png" />
                <img src="/media/kaz_2.png" />
            </div>
            <div className="p-tech">
                <HorizontalContent tech={"C# • Unity • Aseprite"} role={"Creator • Game Developer"} date={"2020"} />
            </div>
        </ProjectContainer>
    );
}

export default Kazakan;
