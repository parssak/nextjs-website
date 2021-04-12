import styled from 'styled-components';

export const primaryColor = "#C8C8C8";

export const Title = styled.h1`
    color: ${primaryColor};
    font-size: ${props => props.larger ? 7 : 4}rem;
    font-weight: 600;
    letter-spacing: -0.1rem;
    margin: 0;
    margin-top: 4rem;
    margin-left: -0.01rem;
    @media (max-width: 800px) {
        font-size: ${props => props.larger ? 5 : 3}rem;
    }
    @media (max-width: 565px) {
        font-size: ${props => props.larger ? 3 : 3}rem;
    }
`

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    position: relative;
    z-index: 0;
    overflow-x: hidden;
    `

export const Description = styled.p`
    color: ${primaryColor};
    font-size: ${props => props.smaller ? 1.3 : 1.5}rem;
    font-weight: 400;
    margin-top: 0rem;
    letter-spacing: -0.04rem;
    max-width: 35ch;
    line-height: 2.3rem;
    @media (max-width: 800px) {
        font-size: ${props => props.smaller ? 1.1 : 1.3}rem;
    }
    @media (max-width: 565px) {
        font-size: ${props => props.smaller ? 0.7 : 1.2}rem;
    }
`

export const ContactButton = styled.button`
    all: unset;
    color: white;
    background-color: #2E75FF;
    padding: 0.7rem 2rem;
    border-radius: 0.8rem;
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 2rem;
    transition: all 0.4s ease;
    align-self: ${props => props.fill ? `center` : `flex-start`};
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    @media (max-width: 565px) {
        align-self: center;
    }
`