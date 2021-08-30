import React from 'react'
import { useHistory } from 'react-router-dom'
import { ContainerTitle } from '../Login/styled'
import { ContainerInput } from '../Login/styled'
import { ContainerButton } from '../Login/styled'

const Registration = () => {
    const history = useHistory()

    const goToFeedPage = () => {
        history.push("/feed")
    }
    return(
        <div>
            <ContainerTitle>
            <h1>Page registration</h1>
            </ContainerTitle>
            <ContainerInput>
        <input placeholder="Nome de usuário" />
        <input placeholder="Email" />
        <input placeholder="Senha" />
        </ContainerInput>
        <ContainerButton>
        <button>Cadastrar</button>
        <button onClick={goToFeedPage}>page feed</button>
        </ContainerButton>
        </div>
    )
}

export default Registration