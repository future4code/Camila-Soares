import React from 'react'
import { ContainerTitle } from '../Login/styled'
import  error  from '../../assets/error.png'
import { ContainerImagem } from './styled'

const ErrorPage = () => {
    return(
        <div>
            <ContainerTitle>
            <h1>Error Page</h1>
            </ContainerTitle>
            <ContainerImagem>
            <img src={error} />
            </ContainerImagem>
            
            </div>
    )
}

export default ErrorPage