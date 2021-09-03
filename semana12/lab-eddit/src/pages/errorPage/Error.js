import React from 'react'
import { ContainerCinza } from '../../pages/postPage/styled'
import { HeaderWhite } from '../../pages/postPage/styled'
import  LogoHeader  from '../../img/logoheader.png'
import { ContainerAvisoErro } from './styled'
import { useHistory } from 'react-router-dom'
import { goToHome } from '../../routes/Cordinators'


const Error = () => {

    const history = useHistory()

    return(
        <ContainerCinza>
            <HeaderWhite>
                <img src={LogoHeader} />
            </HeaderWhite>
            <button onClick={ () => goToHome(history) }>Voltar</button>
          <ContainerAvisoErro>
            <h1>Erro! Página não encontrada.</h1>
            </ContainerAvisoErro>
        </ContainerCinza>
    )
}

export default Error