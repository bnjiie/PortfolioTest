import React from "react";
import styled from "styled-components";
import images from "../images/night1.jpg";
import Header from "./Header";

function Programs() {
    return(
        <Container>
            <Background>
                <img src={images} alt='' />
            </Background>
            <Header />
        </Container>

    );
}

export default Programs

const Container = styled.div`
display: flex;
flex-direction:column;
`

const Background = styled.div`
position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`