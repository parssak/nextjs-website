import Link from 'next/link';
import React from 'react';
import PageBase from '../components/PageBase';
import { ContactButton, Container, Description, Subtitle, Title } from '../components/styles';

const ErrorPage = () => {
    return (
        <PageBase pageTitle="404 Error :(">
            <Container>
                <Title>404 Page not found. 😬</Title>
                <br />
                <Subtitle>How'd you get here?</Subtitle>
                <Description>
                    There's uh, there's not much here. 
                </Description>
                <Link href="/">
                    <ContactButton>Get me outta here</ContactButton>
                </Link>
            </Container>
        </PageBase>
    );
}

export default ErrorPage;
