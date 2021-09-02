import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToSignUpPage } from '../../routes/Cordinators'
import { ContainerTitle } from './styled'
import { ContainerButton } from './styled'
import { Button } from '@material-ui/core'
import LoginForm from './LoginForm'
import useProtectedPage from '../../hooks/useProtectedPage'
const Login = () => {
// useProtectedPage()
    const history = useHistory()

    return (
        <div>
            <ContainerTitle>
                <h1>Login Page</h1>
            </ContainerTitle>
            <LoginForm />
            <ContainerButton>
                <Button
                    variant="contained"
                    color={"primary"}
                    
                >
                    Ir para Sign Up
                </Button>
            </ContainerButton>
        </div>
    )
}

export default Login