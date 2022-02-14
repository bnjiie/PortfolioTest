import React from "react";
import styled, { keyframes } from "styled-components";
import images from "../images/night1.jpg";
import Header from "./Header";

const About = () => {
    return(
        <Container>
            <Background>
                <img src={images} alt='' />
            </Background>

            <Header />

            <SubHeader>
            About Me
            </SubHeader>
            
            <Content>
            <Content1 class='test1'>
                <TextList1>
                    <dl>
                        <dt>Graduate of BS Electronics Engineer</dt>
                        <dd>~ at FEU Institute of Technology</dd>
                        <br />
                        <dt>Work Experience:</dt>
                        <br />
                        <dt>Customer Support Engineer</dt>
                        <dd>~ Field Service Engineer</dd>
                        <dd>~ Medical Equiment and Supply</dd>
                        <br />
                        <dt>Commissioning Engineer</dt>
                        <dd>~ Building Management System</dd>
                        <dd>~ Building Automation</dd>
                        <br />
                        
                    </dl>
                </TextList1>  
            </Content1>
                
            <Content2>
                <TextList2>
                <dl>
                        <dt>Programming Languages:</dt>
                        <dd>~ HTML</dd>
                        <dd>~ CSS</dd>
                        <dd>~ Javascript</dd>
                        <dd>~ ReactJs</dd>
                        <br />
                        <dt>Others:</dt>
                        <dd>~ Microsoft Office Applications</dd>
                        <dd>~ Adobe Photoshop</dd>
                        <dd>~ Sony Vegas</dd>
                    </dl>
                </TextList2>
            </Content2>
            </Content>
        </Container>
    );
}

export default About

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

const SubHeader = styled.div`
diplay: flex;
color: #76b5c2;
font-size: 30px; 
text-align: center;
margin-top: 60px;
`

const Content = styled.div`
display: flex;
flex-direction:row;
margin-top: 20px;
`

const Content1 = styled.div`
diplay: flex;
color: #76b5c2;
font-size: 30px;

border-radius: 5px;
box-shadow: 0 20px 25px rgba(0, 0, 0, 0.3);
height: 650px;
width: 600px;
margin: auto;
padding: 10px;

position: relative;
overflow: hidden;
z-index: 0;

&::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #064466;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#45f7d4, #45f7d4),
    linear-gradient(#0cf7f0, #0cf7f0),
    linear-gradient(#45f7d4, #45f7d4),
    linear-gradient(#0cf7f0, #0cf7f0);
    animation: rotate 4s linear infinite;
}

@keyframes rotate {
	100% {
		transform: rotate(1turn);
	}
}

&::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: #064466;
    border-radius: 5px;
}
`

const TextList1 = styled.div`
justify-content: center;
padding: 25px;
margin: auto;
color: #76b5c2;
font-size: 25px;
line-height: 1.8;
z-index: 10;
`

const Content2 = styled.div`
diplay: flex;
color: #76b5c2;
font-size: 30px; 
border-radius: 5px;
box-shadow: 0 20px 25px rgba(0, 0, 0, 0.3);
height: 650px;
width: 600px;
margin: auto;
padding: 10px;

position: relative;
overflow: hidden;
z-index: 0;

&::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #064466;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#45f7d4, #45f7d4),
    linear-gradient(#0cf7f0, #0cf7f0),
    linear-gradient(#45f7d4, #45f7d4),
    linear-gradient(#0cf7f0, #0cf7f0);
    animation: rotate 4s linear infinite;
}

@keyframes rotate {
	100% {
		transform: rotate(1turn);
	}
}

&::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: #064466;
    border-radius: 5px;
}
`

const TextList2 = styled.div`
justify-content: center;
padding: 25px;
margin: auto;
color: #76b5c2;
font-size: 25px;
line-height: 1.8;
`