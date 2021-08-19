import React from 'react'
import { useHistory } from 'react-router-dom'
const LoginPage = () => {

    const history = useHistory()

    const goToDetails = () => {
        history.push("/admin/trips/create")
    }
    return(
        <div><h2>painel administrativo</h2>
        <button>Voltar</button>
         <button onClick={goToDetails}>Criar viagem</button>
         <button>Logout</button>
        </div>
    )
}

export default LoginPage