import React from 'react';
import { Description, HorizontalContentWrapper, SectionTitle } from './styles';

const HorizontalContent = ({tech, role, date}) => {
    return (
        <HorizontalContentWrapper>
            <div>
                <SectionTitle>Technologies Used</SectionTitle>
                <Description smaller>{tech}</Description>
            </div>
            <div>
                <SectionTitle>Role</SectionTitle>
                <Description smaller>{role}</Description>
            </div>
            <div>

                <SectionTitle>Date</SectionTitle>
                <Description smaller>{date}</Description>
            </div>
        </HorizontalContentWrapper>
    );
}

export default HorizontalContent;
