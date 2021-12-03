import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  max-width: 2000px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  z-index: 99;
  pointer-events: none;
  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    bottom: 1rem;
  }
`;
const Wrapper = styled.div`
  backdrop-filter: blur(5px);
  border-radius: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.1);
  pointer-events: auto !important;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;

  @media (max-width: 800px) {
    grid-column-gap: 0.2rem;
  }
  transition: all 0.5s ease;
  :hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;
const NavButton = styled.button`
  all: unset;
  font-size: 0.9rem;
  mix-blend-mode: difference;
  transition: all 0.3s ease;
  padding: 1rem 1.2rem;
  width: min-content;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  text-transform: center;
  :hover {
    border-color: rgba(170, 170, 170, 0.4);
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transform: translateY(-5px);
  }

  @media (max-width: 600px) {
    margin-right: 0;
  }
`;

const NavBar = ({ onContactClick }) => {
  return (
    <Nav>
      <Wrapper>
        <Link href="/">
          <NavButton>Home</NavButton>
        </Link>
        <Link href="/about">
          <NavButton>About</NavButton>
        </Link>
        <Link href="/projects">
          <NavButton>Projects</NavButton>
        </Link>
        <NavButton onClick={onContactClick}>Contact</NavButton>
      </Wrapper>
    </Nav>
  );
};

export default NavBar;
