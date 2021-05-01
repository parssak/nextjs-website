import { css } from "styled-components";
import { introduceAnim } from "./animations";

export const primaryColor = "#C8C8C8";
export const orange = '#FFD9BD'
export const purple = '#BA99FF'
export const gradient = `linear-gradient(20deg, ${orange}, ${purple});`
export const introduce = css`
    ${props => props.delay && css`
    opacity: 0;
    animation-fill-mode: forwards;
    animation-name: ${introduceAnim};
    animation-duration: ${props => props.duration || `0.4`}s;
    animation-delay: ${props.delay}s;
    `}`;