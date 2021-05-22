import React from 'react';
import { Description, HorizontalContentWrapper, SectionTitle } from './styles';

const HorizontalContent = ({tech, role, date}) => {
    return (
        <HorizontalContentWrapper>
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
        </HorizontalContentWrapper>
    );
}

export default HorizontalContent;
