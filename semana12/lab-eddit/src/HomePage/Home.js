import React from 'react'
import { ContainerLogoHeader } from './styled'
import { ContainerImgReddit } from './styled'
import { ContainerButton } from './styled'
import { Header } from './styled'
import reddit from '../../img/reddit.png'
import logo from '../../img/logo.png'
import { goToLoginPage } from '../../routes/Cordinators'
import { goToSignUpPage } from '../../routes/Cordinators'
import { useHistory } from 'react-router-dom'

const Post = () => {

    const history = useHistory()

    return (
        <div>
            <Header>
                <ContainerLogoHeader>
                    <img src={logo} />
                </ContainerLogoHeader>
            </Header>
            <ContainerImgReddit>
                <img src={reddit} />
            </ContainerImgReddit>
            <ContainerButton>
                <button onClick={() => goToLoginPage(history)}>Entrar</button>
                <button onClick={() => goToSignUpPage(history)}>Cadastrar</button>
            </ContainerButton>

        </div>
    )
}

export default Post 