import React from 'react';
import styled from 'styled-components';
import { Description } from './styles';


const FooterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Footer = () => {
    return (
        <FooterWrapper>
            <Description smaller>This website was designed and developed by me</Description>
            <Description smaller>Thanks for stopping by!</Description>
        </FooterWrapper>
    );
}

export default Footer;
