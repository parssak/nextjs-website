import React from 'react';
import HorizontalContent from '../HorizontalContent';
import { Description, Subtitle, Title, LinkText, ProjectContainer } from '../styles';

const Darco = () => {
    return (
        <ProjectContainer>
            <div className="p-title">
                <Title larger>Darco</Title>
                <Subtitle>iPad App</Subtitle>
                <br /><br />
            </div>
            <div className="p-description">
                <Description><b>Convert any PDF to dark mode with ease</b></Description>
                <br /><br />
                <Description>
                    Darco is an app that converts PDFs into dark mode.
                    I made Darco in Fall 2020, during an online semester at university.
                    As I encountered blindingly-white PDFs, I began searching for
                    a solution. When I realized there was no good iPad solution
                    (which is where I interact with the most PDFs), I decided to make one.
                <br /><br /><br />
                Available in the <LinkText href="https://apps.apple.com/us/app/darco/id1541492663" target="_about">App Store</LinkText>
                    <br />
                Darco also works in the <LinkText href="https://apps.apple.com/us/app/darco/id1541492663" target="_about">browser!</LinkText>
                </Description>
                <br />
            </div>
            <div className="p-media">
                <img src="/media/darco_3.png" />
                <img src="/media/darco_1.png" />
                <img src="/media/darco_2.png" />
            </div>
            <div className="p-tech">
                <HorizontalContent tech={"ReactJS • TypeScript • PDF.JS • Swift"} role={"Creator • Developer"} date="2020" />
            </div>
        </ProjectContainer>
    );
}

export default Darco;
