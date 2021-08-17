import React from 'react'
import { useHistory } from 'react-router-dom'

const ListTripsPage = () => {

const history = useHistory()

const goToAppFormPage = () => {
    history.push("/trips/application")
}

const backToHomePage = () => {
    history.goBack("/")
}

    return(
        <p>LIST TRIPS PAGE heh

            <button onClick={backToHomePage}>Voltar</button>
            <button onClick={goToAppFormPage}>Inscrever-se</button>
        </p>
    )
}

export default ListTripsPage