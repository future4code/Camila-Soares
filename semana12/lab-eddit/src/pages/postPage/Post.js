import React from 'react'
import { ContainerLogoHeader } from './styled'
import { ContainerImgReddit } from './styled'
import { ContainerButton } from './styled'
import { Header } from './styled'
import reddit from '../../img/reddit.png'
import logo from '../../img/logo.png'

const Post = () => {
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
                <button>Entrar</button>
                <button>Cadastrar</button>
            </ContainerButton>

        </div>
    )
}

export default Post