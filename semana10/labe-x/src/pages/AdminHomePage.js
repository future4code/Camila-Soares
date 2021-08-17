import React from 'react'
import { useHistory } from 'react-router-dom'

 const AdminHomePage = () => {

    
const history = useHistory()

// const params = useParams()

const goToAdmPage = () => {
    history.push("/painelAdm")
}

    return(
        <div>
            <h1>Admin Home Page!! =) </h1>
            <input />
            <input />
            <button> Voltar</button>
            <button onClick={goToAdmPage}>Entrar</button>
        </div>
    )
}

export default AdminHomePage