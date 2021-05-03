import React from 'react';
import HorizontalContent from '../HorizontalContent';
import NextProject from '../NextProject';
import { Container, SectionTitle, Description, Subtitle, Title, HorizontalContentWrapper, LinkText } from '../styles';

const Darco = () => {
    return (
        <Container>
            <Title larger>Darco</Title>
            <Subtitle>iPad App</Subtitle>
            <br /><br />
            <Description><b>Convert any PDF to dark mode with ease</b></Description>
            <br /><br />
            <Description>
                Darco is an app I made that converts PDFs into dark mode.
                I made Darco in Fall 2020, during an online semester at university.
                As I encountered blindingly-white PDFs, I began searching for
                a solution. When I realized there was no good iPad solution
                (which is where I interact with the most PDFs), I decided to make one.
                <br/><br/><br/>
                Available in the <LinkText href="https://apps.apple.com/us/app/darco/id1541492663" target="_about">App Store</LinkText>
                <br />
                Darco also works in the <LinkText href="https://apps.apple.com/us/app/darco/id1541492663" target="_about">browser!</LinkText>
            </Description>
            <br />
            <HorizontalContent tech={"ReactJS • TypeScript • PDF.JS • Swift"} role={"Creator • Developer"} date="2020"/>
            <NextProject nextProjectName={'mixbot'} />
        </Container>
    );
}

export default Darco;
