import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToFeedPage } from '../../routes/Cordinators'
import { ContainerTitle } from '../login/styled'
import { ContainerButton } from '../login/styled'
import { ContainerInput } from '../login/styled'
import { Button } from '@material-ui/core'
import IntegracaoSignUp from "./SignUpForm"


const SignUpPage = () => {
    return(
        <div>
         <IntegracaoSignUp />
        </div>
    )
}

export default SignUpPage