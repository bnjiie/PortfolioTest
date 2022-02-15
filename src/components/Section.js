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
    display: flex;
    flex-direction: column;
    color: #76b5c2;
    text-align: left;
    position: absolute;
    top: 340px;
    left: 100px;
    font-family: 'Fredoka One', cursive;

    h1 {
        font-size: 90px;
        margin: 0;
        padding: 0;


        animation: glow 2s ease-in-out infinite alternate;
    }

    p {
        font-size: 30px;
        margin: 0;
        padding: 0;
    }

    @keyframes glow {
        from {
          text-shadow: 0 0 20px #2d9da9;
        }
        to {
          text-shadow: 0 0 30px #34b3c1, 0 0 10px #4dbbc7;
        }
      }
    }

`