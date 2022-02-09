import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Programs from "./Programs";
import Contact from "./Contact";


function myHome() {
    alert('You clicked me!');
}


function Header (){

    let navigate = useNavigate();

    const myHome = () => {
        let path = 'Home';
        navigate(path)
    }

    const myAbout = () => {
        let path = ('/About')
        navigate(path)
    }

    const myPrograms = () => {
        let path = ('/Programs')
        navigate(path)
    }

    const myContact = () => {
        let path = 'Contact';
        navigate(path)
    }


    return (
        <div>
        <Container>
            <Menu>
                <button onClick={(myHome)}>Home</button>
                <button onClick={(myAbout)}>About</button>
                <button onClick={(myPrograms)}>Programs</button>
                <button onClick={(myContact)}>Contact</button>   
            </Menu>
        </Container>
        </div>
    );
}

export default Header

const Container = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    flex: 1;
    padding: 10px;
    color: #76b5c2;

    button {
        all: unset;
        cursor: pointer;
        font-weight: 600;
        padding: 0 10px;
        flex-wrap: none;
    }
`

const Menu = styled.div``