import { css } from "styled-components";
import { introduceAnim } from "./animations";

export const colors = {
    primary: '#C8C8C8',
    orange: '#FFD9BD',
    purple: '#BA99FF',
}
// export const primaryColor = "#C8C8C8";
// export const orange = '#FFD9BD'
// export const purple = '#BA99FF'
export const gradient = `linear-gradient(20deg, ${colors.orange}, ${colors.purple});`
export const introduce = css`
    ${props => props.delay && css`
    opacity: 0;
    animation-fill-mode: forwards;
    animation-name: ${introduceAnim};
    animation-duration: ${props => props.duration || `0.4`}s;
    animation-delay: ${props.delay}s;
    `}`;