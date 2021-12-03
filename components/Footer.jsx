import React from "react";
import styled from "styled-components";
import { Description } from "./styles";

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 2000px;
  margin-top: 4rem;
  @media (max-width: 800px) {
    display: none;
  }
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <Description smaller style={{ maxWidth: `80ch` }}>
        This website was designed and developed by me
      </Description>
      <Description smaller>Thanks for stopping by!</Description>
    </FooterWrapper>
  );
};

export default Footer;
