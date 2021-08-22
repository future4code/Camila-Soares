import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'


const ContainerTitle = styled.div`

h2{
    font-size: 50px;
    color: #E85887;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
}
`

const ContainerInput = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

input{
    margin: 5px;
    width: 500px;
    height: 25px;
    border-radius: 3px;
    border: none;
    display: flex;
    flex-direction: column;
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

:hover{
    background-color: #F796B6;
}
}`

const AdminHomePage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    const goToHomePage = () => {
        history.push("/")

    }


    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)

    }

    const onSubmitLogin = (event) => {
        event.preventDefault()

        const body = {
            email: email,
            password: password
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-soare-lovelace/login", body)
            .then((res) => {
                console.log("deu certo", res.data)

                history.push("/admin/trips/list")


            })
            .catch((err) => {
                console.log("não deu certo", err)
            })

    }




    return (
        <ContainerTitle>
            <h2>Login</h2>
            <form onSubmit={onSubmitLogin}>
                <ContainerInput>
                    <input
                        placeholder={"Email"}
                        type={"email"}
                        required
                        value={email}
                        onChange={onChangeEmail}
                    />

                    <input
                        placeholder={"Senha"}
                        type={"password"}
                        required
                        value={password}
                        onChange={onChangePassword}
                    />
                </ContainerInput>
                <ContainerButton>
                    <div>
                        <button onClick={goToHomePage}>Voltar</button>
                        <button>Entrar</button>
                    </div>
                </ContainerButton>
            </form>
        </ContainerTitle>
    )
}

export default AdminHomePage