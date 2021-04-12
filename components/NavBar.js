import styled from 'styled-components';

const Nav = styled.nav`
    padding: 2rem;
    padding-left: 0rem;
    margin-left: -1rem;
    display: flex;
    @media (max-width: 565px) {
        display: none;
    }
`

const NavButton = styled.button`
    all: unset;
    color: white;
    font-size: 1.1rem;
    margin-right: 4rem;
    padding: 1rem;
    transition: all 0.5s ease;
    border-radius: 1rem;
    :hover {
        background-color: rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transform: translateY(-5px);
    }
`

const NavBar = () => {
    return (
        <Nav>
            <NavButton>About</NavButton>
            <NavButton>Projects</NavButton>
            <NavButton>Contact</NavButton>
        </Nav>
    );
}

export default NavBar;
