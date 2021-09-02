import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import{ goToLoginPage } from '../../routes/Cordinators'
import { ContainerTitle } from '../login/styled'
import { ContainerButton } from '../login/styled'

const Home = () => {

    const history = useHistory()

    return(
        <div>
            <ContainerTitle>
            <h1>LabEddit</h1>
            </ContainerTitle>
            <ContainerButton>
            <Button variant="contained" color={"primary"} onClick={() => goToLoginPage(history)} >
                Login
            </Button>
            </ContainerButton>
           
        </div>
    )
}

export default Home

//            <button onClick={() => goToLoginPage(history)}>Login</button>
