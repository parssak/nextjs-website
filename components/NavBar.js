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
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    border-radius: 1rem;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    padding-left: 0rem;
    &:last-child {
        margin-left: 0;
    }
    @media (max-width: 800px) {
        justify-content: space-around;
        width: 100%;
        padding: 0.5rem 0;
        
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
    :hover {
        background-color: rgba(25, 25, 25, 0.5);
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
                <NavButton>Home</NavButton>
                <NavButton>About</NavButton>
                <NavButton>Projects</NavButton>
                <NavButton>Contact</NavButton>
            </Wrapper>
        </Nav>
    );
}

export default NavBar;
