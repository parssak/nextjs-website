import styled from 'styled-components';

export const primaryColor = "#C8C8C8";
export const gradient = `linear-gradient(271.88deg, #9C9AFF 3.74%, #BDACDD 24.32%, #FFD19A 100.72%);`


export const Title = styled.h1`
    color: ${primaryColor};
    font-size: ${props => props.larger ? 3.5 : 3}rem;
    font-weight: 600;
    letter-spacing: -0.1rem;
    margin: 0;
    margin-top: 4rem;
    margin-left: -0.01rem;
    ${props => props.larger && `
        background: ${gradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `}
`
export const Subtitle = styled.h2`
    color: #c0c0c0;
    font-weight:400;
    font-size: 1.4rem;
    margin: 0;
    margin-bottom: 10rem;
    margin-top: -0.5rem;
    letter-spacing: -0.05rem;
`
export const SectionTitle = styled.h3`
    color: #c0c0c0;
    font-weight:600;
    font-size: 2rem;
    margin: 0;
    margin-top: 2rem;
    margin-bottom: 0.3rem;
    letter-spacing: -0.05rem;
`
export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    max-width: 2000px;
    position: relative;
    z-index: 0;
    overflow-y: overflow;
    margin-top: 4rem;
    @media (max-width: 800px) {
        margin-top: 0rem;
    }
    `

export const Description = styled.p`
    color: ${primaryColor};
    font-size: ${props => props.smaller ? 1 : 1.2}rem;
    font-weight: 400;
    margin-top: 0rem;
    letter-spacing: -0.04rem;
    max-width: 35ch;
    line-height: 2rem;
`

export const ContactButton = styled.button`
    all: unset;
    color: white;
    background-color: #2E75FF;
    letter-spacing: -0.05rem;
    padding: 0.7rem 2rem;
    border-radius: 0.8rem;
    font-size: 1rem;
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

export const HorizontalContentWrapper = styled.div`
    width: calc(100% - 2rem);
    display: flex;
    justify-content: space-between;
        flex-direction: column;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`