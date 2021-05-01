import styled from "styled-components";
import { useEffect, useRef } from 'react';
import { Title, Container } from "./styles"
import { primaryColor } from './styles/constants';
import { projectData } from "../data";
import { v4 as uuidv4 } from 'uuid';
import Link from "next/link";

const ProjectsContainer = styled(Container)`
    position: relative;
`
const padding = 4;
const ProjectWrapper = styled.div`
    position: relative;
`

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    backdrop-filter: blur(10px);
    background-color: ${props => props.bgCol};
    padding: ${padding}rem;
    margin-top: 2rem;
    border-radius: 2rem;
    @media (max-width: 1410px) {
        align-items: flex-start;
    }
    @media (max-width: 800px) {
        padding: ${padding - 1}rem;
    }
    @media (max-width: 565px) {
           padding: ${padding - 2}rem;
    }
    & > * {
        transition: all 0.2s ease-in-out;
        &:not(img)
        {
            z-index: 9999;
        }
    }
    
    :hover {
        cursor: pointer;
        
        & > img {
            transform: scale(1.02);
        }
        
        & > *:not(img)
        {
            /* transform-style: preserve-3d;
            transform: scale(1.03) translate3d(-0.6vw, -1vh, 1vw); */
        }
    }
`
const ProjectDetails = styled.div`
    @media (min-width: 1409px) {
        position: absolute;
        top: ${padding}rem;
        left: ${padding}rem;
    }
    margin-bottom: 1rem;
`
const ProjectType = styled.h3`
    color: ${primaryColor};
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: -0.05rem;
    margin: 0;
    @media (max-width: 800px) {
        font-size: ${1.3}rem;
    }
    @media (max-width: 565px) {
        font-size: ${1.2}rem;
        align-self: center;
    }
`
const ProjectName = styled.h2`
    color: ${primaryColor};
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: -0.1rem;
    margin: 0;
    position: relative;
    z-index: 99999;
    @media (max-width: 800px) {
        font-size: ${2}rem;
    }
    @media (max-width: 565px) {
        font-size: ${1.6}rem;
        align-self: center;
    }
`

const ProjectImage = styled.img`
    position: relative;
    max-width: min(70%, 55vw);
    border-radius: 1rem;
    @media (max-width: 1410px) {
        max-width: 80%;
        align-self: center;
    }
    @media (max-width: 800px) {
        max-width: 70vw;
    }
    @media (max-width: 565px) {
        font-size: ${1.6}rem;
        align-self: center;
    }

`
const Project = ({ data }) => {
    return (
        <Link href={`/${data.className}`}>
            <ProjectWrapper id={data.className}>
                {data.className === 'kazakan' && <PurpleBall />}
                {data.className === 'darco' && <PurpleBall2 />}
                {data.className === 'mixbot' && <OrangeBall />}
                <ProjectContainer bgCol={data.bgColor}>
                    <ProjectDetails>
                        <ProjectType>{data.type}</ProjectType>
                        <ProjectName>{data.name}</ProjectName>
                    </ProjectDetails>
                    <ProjectImage src={data.media[0]} />
                </ProjectContainer>
            </ProjectWrapper>
        </Link>

    )
}

const RedBall = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    right: -70px;
    top: 250px;
    z-index: 0;
    background: radial-gradient(42% 42% at 60.5% 38%, #FF9A9A 0%, #C44149 100%);
    transition: all 1s ease;
    border-radius: 100%;
        @media (max-width: 565px) {
        width: 100px;
        height: 100px;
    }
`
const PurpleBall = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    top: 50%;
    left: -120px;
    border-radius: 100%;
    background: radial-gradient(49.26% 49.26% at 32.22% 39.26%, #9C9AFF 0%, #4441C4 100%);
`

const PurpleBall2 = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    top: 40%;
    right: -150px;
    border-radius: 100%;
    background: radial-gradient(44.46% 44.46% at 71.56% 44.06%, #5753EB 0%, #2A1C80 100%);
    transition: all 1s ease;
        @media (max-width: 565px) {
        width: 180px;
        height: 180px;
    }
`

const OrangeBall = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    top: 60%;
    left: -10%;
    z-index: -1;
    border-radius: 100%;
    background: radial-gradient(49.26% 49.26% at 32.22% 39.26%, #FFD19A 0%, #C47041 73.96%, #C46041 100%);
`

const SelectedProjects = () => {
    return (
        <ProjectsContainer>
            <Title>Selected Work</Title>
            {
                projectData.map(project => <Project data={project} key={uuidv4()} />)
            }
            <RedBall />
        </ProjectsContainer>
    );
}

export default SelectedProjects;
