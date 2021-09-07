import { css } from "styled-components";
import { introduceAnim } from "./animations";

export const colors = {
    primary: '#C8C8C8',
    orange: '#FFD9BD',
    purple: '#BA99FF',
    green: '#19d464',
    red: '#ff475a',
    yellow: '#f5c542',
}

export const gradient = `linear-gradient(20deg, ${colors.orange}, ${colors.purple});`
export const introduce = css`
    ${props => props.delay && css`
    opacity: 0;
    animation-fill-mode: forwards;
    animation-name: ${introduceAnim};
    animation-duration: ${props => props.duration || `0.4`}s;
    animation-delay: ${props.delay}s;
    `}`;