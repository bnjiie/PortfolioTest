import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Header = () => {

    const navigate = useNavigate();
    const myAbout = () => {
        navigate('/About')
    }
    const myHome = () => {
        navigate('/')
    }
    const myPrograms = () => {
        navigate('/Programs')
    }


return (
        <div>
        <Container>
            <Menu>
                <button onClick={(myHome)}>Home</button>
                <button onClick={(myAbout)}>About</button>
                <button onClick={(myPrograms)}>Programs</button>  
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
        padding: 0 20px;
        flex-wrap: none;
    }
`

const Menu = styled.div``