import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

document.body.style = "background: #FFE4ED"



const BoxText = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: center;
margin: 200px;
text-align: center;

div{
    background-color: #FFE4ED;
    width: 300px; 


    img{
    width: 300px;
    height: 60px;
    margin-top: 200px;
}

 h1{
    font-size: 50px;
    color: #E85887;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
}

button{
    padding: 3px;
    margin: 2px;
    background-color: #E85887;
    width: 120px;
    height: 35px;
    border-radius: 12px;
    cursor: pointer;
    border: 1px solid #C72057;

:hover{
    background-color: #F796B6;
}




}
`

const HomePage = () => {

    const history = useHistory()

    const goToListTripsPage = () => {
        history.push("/trips/list")
    }

    const goToAdminHomePage = () => {
        history.push("/login")
    }
    return (

        <div>

            <BoxText>
                <div>
                    <h1>LabeX</h1>
                    <button onClick={goToListTripsPage}>Ver viagens</button>
                    <button onClick={goToAdminHomePage}>Área de Admin</button>
                </div>
            </BoxText>
        </div>

    )
}

export default HomePage