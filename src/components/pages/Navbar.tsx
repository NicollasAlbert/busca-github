import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 10rem;
    background-color: #17191f;
    font-size: 1.25rem;
`;

const NavbarContainer = styled.nav `
    ul {
        display: flex;
        gap: 1rem;
    }
`;

const Navbar = () => {
    return (
        <HeaderContainer>
            <Link to={`/`}><h1>Buscador GitHub</h1></Link>
            <NavbarContainer>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/recentes`}>Recentes</Link>
                    </li>
                </ul>
            </NavbarContainer>
        </HeaderContainer>
    )
}

export default Navbar