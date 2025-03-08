import styled from "styled-components";
import {Link} from 'react-router';

const NavDiv = styled.nav`
    width:30%;
    height: 100vh;
    background-color: #4a90e2;
    display: flex;
    flex-direction: column;
    padding: 30px;
    @media screen and (max-width: 900px) {
        width: 100%;
        height: auto;
        background-color: #4a90e2;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 2vh 0;
        position: relative;
    }
`
const NavList = styled.ul`
    display: flex;
    padding: 0;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    width: 100%;
    @media screen and (max-width: 900px) {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        background-color: #4a90e2;
        padding: 1vh 0;
    }
`;
const NavItem = styled(Link)`
    font-size: calc(1px + 1.2vw);
    background-color:#a7c7e7;
    width: 100%;
    padding: 2vh 0;
    text-decoration: underline;
    margin: 5vh auto;
    text-align: center;
    color: black;
    @media screen and (max-width: 900px) {
        font-size: calc(2px + 1.2vw);
        width: auto;
        padding: 1% .5%;
        margin: 1% .5%;
    }
`;

export default function Nav(){
    return(
        <NavDiv>
            <NavList>
                <NavItem to='/'>Home</NavItem>
                <NavItem to='/achievements'>Achievements</NavItem>
                <NavItem to='/education'>Education</NavItem>
                <NavItem to='/employment'>Employment</NavItem>
                <NavItem to='/projects'>Projects</NavItem>
                <NavItem to='/skills'>Skills</NavItem>
            </NavList>
        </NavDiv>

    )
}