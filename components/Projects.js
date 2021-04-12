import styled from "styled-components";
import { Title, Container, primaryColor } from "./styles"
import { projectData } from "../data";
import { v4 as uuidv4 } from 'uuid';
const ProjectsContainer = styled(Container)`
`
const padding = 4;
const ProjectContainer = styled.div`
    backdrop-filter: blur(1rem);
    background: rgba(38, 48, 105, 0.6);
    min-height: 60vh;
    padding: ${padding}rem;
    margin-top: 2rem;
    border-radius: 2rem;
    overflow-y: show;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ProjectDetails = styled.div`
    position: absolute;
    top: ${padding}rem;
    left: ${padding}rem;
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
    letter-spacing: -0.05rem;
    margin: 0;
    @media (max-width: 800px) {
        font-size: ${2}rem;
    }
    @media (max-width: 565px) {
        font-size: ${1.6}rem;
        align-self: center;
    }
`

const ProjectImage = styled.img`
    max-width: 55vw;

`
const Project = ({ data }) => {
    return (
        <ProjectContainer style={{ backgroundColor: data.bgColor }}>
            <ProjectDetails>
                <ProjectType>{data.type}</ProjectType>
                <ProjectName>{data.name}</ProjectName>
            </ProjectDetails>
            
            <ProjectImage src={data.media[0]}/>
        </ProjectContainer>

    )
}

const RedBall = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    right: -70px;
    top: 250px;
    background: radial-gradient(42% 42% at 60.5% 38%, #FF9A9A 0%, #C44149 100%);
    border-radius: 100%;
`
const PurpleBall = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    top: 60vh;
    left: 20px;
    z-index: -1;
    border-radius: 100%;
    background: radial-gradient(49.26% 49.26% at 32.22% 39.26%, #9C9AFF 0%, #4441C4 100%);
`

const PurpleBall2 = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    top: 120vh;
    right: 20px;
    z-index: -1;
    border-radius: 100%;
    background: radial-gradient(44.46% 44.46% at 71.56% 44.06%, #5753EB 0%, #2A1C80 100%);
`

const OrangeBall = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    top: 160vh;
    left: 5px;
    z-index: -1;
    border-radius: 100%;
    /* background: radial-gradient(44.46% 44.46% at 71.56% 44.06%, #5753EB 0%, #2A1C80 100%); */
    background: radial-gradient(49.26% 49.26% at 32.22% 39.26%, #FFD19A 0%, #C47041 73.96%, #C46041 100%);
`

const Projects = () => {
    return (
        <ProjectsContainer>
            <Title>Selected Work</Title>
            {
                projectData.map(project => <Project data={project} key={uuidv4()}/>)
            }
            <RedBall />
            <PurpleBall/>
            <PurpleBall2 />
            <OrangeBall/>
        </ProjectsContainer>
    );
}

export default Projects;
