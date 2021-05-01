import { keyframes } from "styled-components";

export const hueRotate = startVal => keyframes`
  from {
    filter: hue-rotate(${startVal}deg) blur(3rem) invert(0);
  }
  to {
    filter: hue-rotate(${startVal - 360}deg) blur(3.3rem);
  }
`;

export const introduceAnim = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`