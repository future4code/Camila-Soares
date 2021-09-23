import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToCreatePost } from '../../routes/Cordinators'
import { ContainerTitle } from '../login/styled'
import { ContainerButton } from '../login/styled'
import { Button } from '@material-ui/core'

const Feed = () => {

    const history = useHistory()
    return(
        <div>
            <ContainerTitle>
            <h1>Feed Page</h1>
            </ContainerTitle>
            <ContainerButton>
            <Button variant="contained" color={"primary"} nClick={() => goToCreatePost(history)}>
            Criar post
                </Button>

            </ContainerButton>
        </div>
    )
}

export default Feed 