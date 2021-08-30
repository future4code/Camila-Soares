import React from 'react'
import { useHistory } from 'react-router-dom'
import{ Button } from '@material-ui/core'
import { ContainerTitle } from '../Login/styled'
import { ContainerButton } from '../Login/styled'

const Home = () => {

    const history = useHistory()
    
  const goToLoginPage = () => {
        history.push("/login")
    }
    
    return(
        <div>
            <ContainerTitle>
            <h1>Page Home</h1>
            </ContainerTitle>
            <ContainerButton>
        <Button variant="contained" color="primary" onClick={goToLoginPage}>Login Page</Button>
        </ContainerButton>
        {/* <button onClick={goToLoginPage}>Login page</button> */}
        </div>
    )
}

export default Home