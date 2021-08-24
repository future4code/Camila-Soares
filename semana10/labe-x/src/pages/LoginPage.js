import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const ContainerTitle = styled.div`

h2{
    font-size: 35px;
    color: #E85887;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
}
`
const ContainerButton = styled.div`


div{
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;

}

button{
    padding: 3px;
    margin: 12px;
    background-color: #E85887;
    width: 120px;
    height: 35px;
    border-radius: 12px;
    cursor: pointer;
    border: 1px solid #C72057;
    margin-left: 20px;

:hover{
    background-color: #F796B6;
}
}
`

const LoginPage = () => {

    const [delTrip, setDelTrip] = useState()

    const deleteTrip = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-soare-lovelace/trips/:id"
        const headers = {
            "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ind0d…0NzZ9.1APlwRTv--wcbsKJVEqz4SRA-1OxwlaYYebZUNmhmjI"
        }
        axios.delete(url, headers)
            .then((res) => {
                console.log("deu certo", res)
            })

            .catch((err) => {
                console.log("erro", err)
            })
    }


    const history = useHistory()

    const goToDetails = () => {
        history.push("/admin/trips/create")

    }

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToHomePage = () => {
        history.push("/")
    }


    return (
        <ContainerTitle>
            <h2>Painel administrativo</h2>
            <form onSubmit={deleteTrip}>
                <ContainerButton>
                    <div>
                        <button onClick={goToHomePage}>Voltar</button>
                        <button onClick={goToDetails}>Criar viagem</button>
                        <button onClick={goToLoginPage}>Logout</button>
                        <button>Apagar</button>
                    </div>
                </ContainerButton>
            </form>
        </ContainerTitle>
    )
}

export default LoginPage