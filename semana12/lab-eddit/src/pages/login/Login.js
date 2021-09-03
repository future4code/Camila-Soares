import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToSignUpPage } from '../../routes/Cordinators'
import { ContainerButton } from './styled'
import { Button } from '@material-ui/core'
import LoginForm from './LoginForm'
import { ContainerOrange } from './styled'
import { ContainerWhite } from './styled'

const Login = () => {
// useProtectedPage()
    const history = useHistory()

    return (
        <ContainerOrange>
        <div>
           <div>
     
            <LoginForm />
           
           </div>
            {/* <ContainerButton>
                <Button
                    variant="contained"
                    color={"primary"}
                    
                >
                    Ir para Sign Up
                </Button>
            </ContainerButton> */}
        </div>
        </ContainerOrange>
    )
}

export default Login