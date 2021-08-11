import React from 'react'
import styled from 'styled-components' 
document.body.style = "background: #E1E8E5;"


const CardPai = styled.div`
display: flex; 
align-items: center;
justify-content: flex-start;
flex-direction: column;


 div {
    background-color: blue;
    box-shadow: 0 3px 2px 2px rgba(160,160,160,0.1);
    width: 260px;
    height: 400px;
    border-radius: 0%;
} 

button{
    margin-top: -20px;
}
`
//fazer borda no container

const HomePage = () => {
    return(
            <CardPai>
                <div>Página inicial</div>
                <img/>
                {/* <button>❤</button>
                <button>X</button> */}

             </CardPai>
   
    )
}

export default HomePage

