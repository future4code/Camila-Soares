import React from 'react'
import styled from 'styled-components'

document.body.style = "background: #FFE4ED"
const BoxText = styled.div `

display: flex;
align-items: center;
justify-content: center;
flex-direction: center;
margin: 200px;
text-align: center;

div{
    background-color: #FFE4ED;
    width: 300px; 

 h1{
    color: #E85887;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
}

button{
    padding: 3px;
    margin: 2px;
    background-color: #E85887;
    width: 100px;
    height: 30px;
    border-radius: 12px;
    cursor: pointer;
    border: 1px solid #C72057;

:hover{
    background-color: #F796B6;
}


}
`

const HomePage = () => {
    return(
        <div>
            <BoxText>
<div> <h1>LabeX</h1>
<button>Ver viagens</button>
        <button>Área de Admin</button>
</div>
            </BoxText>
       
        </div>
    )
}

export default HomePage