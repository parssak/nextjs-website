import React from 'react';
import { Description, ProjectDetailsWrapper, SectionTitle } from '../styles';

const ProjectDetails = ({tech, role, date}) => {
    return (
        <ProjectDetailsWrapper>
            <div>
                <SectionTitle>Technologies Used</SectionTitle>
                <Description>{tech}</Description>
            </div>
            <div>
                <SectionTitle>Role</SectionTitle>
                <Description>{role}</Description>
            </div>
            <div>

                <SectionTitle>Date</SectionTitle>
                <Description>{date}</Description>
            </div>
        </ProjectDetailsWrapper>
    );
}

export default ProjectDetails;
