import React from 'react'
import styled from 'styled-components'


const CardPai = styled.div`
display: flex; 
align-items: center;
justify-content: flex-start;
flex-direction: column;


 div {
    background-color: pink;
    box-shadow: 0 3px 2px 2px rgba(160,160,160,0.1);
    width: 260px;
    height: 400px;
    border-radius: 0%;
} 
`

const MatchesPage = () => {
    return(
        <CardPai> 
            <div>Página Matches Page</div>
        </CardPai>
    )
}

export default MatchesPage