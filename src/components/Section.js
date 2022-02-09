import React from "react";
import styled from "styled-components";

function Section() {
    return(
        <ItemText>
            <p>Hi I'm</p>
            <h1>Benjamin Fernandez</h1>
            <p>Career driven professional who's striving to explore a career on IT field</p>
        </ItemText>
    );
}

export default Section

const ItemText = styled.div`
    color: #76b5c2;
    text-align: left;
    position: absolute;
    top: 340px;
    left: 100px;

    h1 {
        font-size: 90px;
        margin: 0;
        padding: 0;
    }

    p {
        font-size: 30px;
        margin: 0;
        padding: 0;
    }
`