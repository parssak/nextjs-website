import Link from 'next/link';
import styled from 'styled-components';
import { gradient, primaryColor } from './styles';

const Nav = styled.nav`
    width: 100%;
    max-width: 2000px;
    margin-left: -1rem;
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
    position: fixed;
    z-index: 99;
    @media (max-width: 800px) {
        justify-content: center;
        align-items:center;
        margin-left: 0rem;
        bottom: 1rem;
    }
`
const Wrapper = styled.div`
    backdrop-filter: blur(5px);
    border-radius: 1rem;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    padding-left: 0rem;
    background: rgba(0, 0, 0, 0.1);
    &:last-child {
        margin-left: 0;
    }
    @media (max-width: 800px) {
        justify-content: space-around;
        width: 100%;
        padding: 0.5rem 0;
    }
    transition: all 0.5s ease;
    :hover {
        background: rgba(0, 0, 0, 0.3);
    }
`   
const NavButton = styled.button`
    all: unset;
    color: ${primaryColor};
    font-size: 1.1rem;
    padding: 1rem 1.2rem;
    transition: all 0.5s ease;
    border-radius: 1rem;
    margin-inline : 2rem;
    border: 1px solid transparent;
    mix-blend-mode: difference;
    :hover {
        border-color: rgba(170, 170, 170, 0.4);
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
        transform: translateY(-5px);
    }
    @media (max-width: 600px) {
        margin-right: 0;
        font-size: 0.7rem;
        }
`

const NavBar = () => {
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
                <NavButton>Contact</NavButton>
            </Wrapper>
        </Nav>
    );
}

export default NavBar;
