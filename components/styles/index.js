import styled, { css } from 'styled-components';
import { hueRotate } from './animations';
import { colors, introduce } from './constants';


//** Typography */
export const Title = styled.h1`
    font-size: ${props => props.larger ? 3.5 : 3}rem;
    font-weight: 600;
    letter-spacing: -0.1rem;
    margin: 0;
    margin-top: 4rem;
    margin-left: -0.01rem;
    ${props => props.larger && css`
        color: white;
        mix-blend-mode: saturation;
    `}
    position: relative;
    ${introduce}
`
export const Subtitle = styled.h2`
    color: #c0c0c0;
    font-weight:400;
    font-size: 1.4rem;
    margin: 0;
    margin-bottom: 7rem;
    margin-top: -0.5rem;
    letter-spacing: -0.05rem;
    ${introduce}
`
export const SectionTitle = styled.h3`
    color: #fff;
    font-weight:600;
    font-size: 2rem;
    margin: 0;
    margin-top: 2rem;
    margin-bottom: 0.3rem;
    letter-spacing: -0.05rem;
    ${introduce}
`

export const Description = styled.p`
    font-size: ${props => props.smaller ? 1 : 1.2}rem;
    font-weight: 400;
    margin-top: 0rem;
    letter-spacing: -0.04rem;
    max-width: 35ch;
    line-height: 2rem;
    ${introduce}
`

export const Label = styled.label`
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
`

//** Layout */
export const Container = styled.section`
    min-height: 100vh;
    max-width: 2000px;
    width: 100%;
    position: relative;
    z-index: 0;
    overflow-y: overflow;
    margin-top: 4rem;
    @media (max-width: 800px) {
        margin-top: 0rem;
    }
    @media (min-height: 1300px) {
        max-height: 1000px;
    }
`

export const HorizontalContentWrapper = styled.div`
    grid-area: p-tech;
    width: calc(100% - 2rem);
    display: flex;
    justify-content: space-between;
        flex-direction: column;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`

export const ProjectContainer = styled(Container)`
    display: grid;
    gap: 1rem;
    img {
        width: 100%;
        border-radius: 1rem;
    }
    .p-media img {
        margin-bottom: 1rem;
    }
    @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.4fr 0.8fr 1.5fr;
    grid-template-areas:
      "p-title p-title"
      "p-description p-media"
      "p-tech p-media";
    .p-title { grid-area: p-title; }
    .p-description { grid-area: p-description; }
    .p-media { grid-area: p-media; img {width: 80%; float: right;}}
    .p-media-2 { grid-area: p-media-2; }
    .p-tech { grid-area: p-tech; }
    }
`;
export const TitleBall = styled.div`
    height: 800px;
    width: 800px;
    border-radius: 200%;
    position: absolute;
    top: 50%;
    z-index: -1;
    ${props => props.left ? css`left: -25%` : css`right: -25%`};
    background: radial-gradient(49.71% 101.93% at -1.54% -2.07%, #5C47DF 0%, rgba(20, 16, 222, 0) 100%), radial-gradient(116.82% 101.4% at 76.73% -23.2%, #DC7D25 0%, rgba(171, 108, 50, 0) 100%);
    transition: all 0.4s ease;
    animation-fill-mode: forwards;
    animation: ${props => hueRotate(props.random)} linear infinite 5s;
    animation-direction: alternate;
    animation-play-state: paused;
    :hover {
        animation-play-state: running;
    }
    ${props => props.scale > 0 && css`transform: scale(${props.scale});`};
`

export const DelayBox = styled.div`
    ${introduce}
`


//** Inputs */
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
    ${introduce}
`

export const Input = styled.input`
    border: 0;
    font-size: 1rem;
    background: #292929;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    font-family: Inter;
    color: rgb(235, 235, 235);
    outline: none;
    padding: 0.5rem;
    border: 1px solid transparent;
    transition: all 0.5s ease;
    box-shadow: 0px 4px 1rem -10px rgba(154, 147, 147, 0.25);
    :focus {
        border-color: rgba(98, 98, 98, 0.58);
        box-shadow: 0px 4px 1rem rgba(154, 147, 147, 0.25);
        color: white;
}
`
export const TextArea = styled.textarea`
    border: 0;
    font-size: 1rem;
    background: #292929;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    resize: none;
    min-height: 15ch;
    font-family: Inter;
    color: whitesmoke;
    outline: none;
    padding: 0.5rem;
    border: 1px solid transparent;
    transition: all 0.5s ease;
    box-shadow: 0px 4px 1rem -10px rgba(154, 147, 147, 0.25);
    :focus {
        border-color: rgba(98, 98, 98, 0.58);
        box-shadow: 0px 4px 1rem rgba(154, 147, 147, 0.25);
    }
`

export const LinkText = styled.a`
    font-weight: 600;
    padding: 0.1rem 0.1rem;
    display: inline-block;
    border-radius: 0.5rem;
    transition: all 0.5s ease;
    position: relative;
    ::before {
        content: '';
        position: absolute;
        
        height: 2px;
        width: 80%;
        
        left: 10%;
        bottom: 0;
        
        background-color: rgba(255, 255, 255, 0.3);
        transition: all 0.2s ease;
    }

    &:hover {
        cursor: pointer;
        transform: skewX(-5deg);
        background-color: ${colors.purple}22;
        color: ${colors.purple};
    
        ::before {
            left: 23%;
            width: 60%;
            background-color: ${colors.purple};

        }
    }
`
