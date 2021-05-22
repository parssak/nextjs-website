import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Subtitle, Title } from './styles';

const NextProjectContainer = styled.div`
    min-height: 25vh;
    display: flex;
    width: calc(100% - 4.8rem);

    @media (max-width: 565px) {
        width: calc(100% - 2rem);
    }

    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius:3rem;
    padding: 4rem 2rem;
    transition: all 0.2s ease;
    margin-top: 10rem;
    background: rgba(255, 255, 255, 0);
    & > * {
        transition: all 0.4s ease-in-out;
        transform: scale(0.75);
        margin: 0;
    }
    :hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.085);
        & > * {
            transform: scale(0.85);
        }
    }
`
const NextProject = ({ nextProjectName }) => {
    return (
        <>
            <Link href={`/${nextProjectName}`}>
                <NextProjectContainer>
                    <Subtitle>Next Project</Subtitle>
                    <Title style={{ textTransform: 'capitalize' }}>{nextProjectName}</Title>
                </NextProjectContainer>
            </Link>
        </>
    );
}

export default NextProject;
