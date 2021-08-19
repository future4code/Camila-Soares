import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;

div{
    background-color: #FFE4ED;
    width: 250px;
    height: 300px;
    padding: 60px;
} 

 h1{
    color: #E85887;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
} 

button{
    padding: 3px;
    margin: 2px;
    background-color: #E85887;
    width: 100px;
    height: 30px;
    border-radius: 12px;
    cursor: pointer;
    border: 1px solid #C72057;

:hover{
    background-color: #F796B6;
}
}

`

const ContainerInfoTrip = styled.div`
display: flex;
flex-direction: row;
justify-content: center;



div{
    background-color: white;
    width: 400px;
    height: 150px;
    box-shadow: 1px 2px 2px 2px #EBEFED;
}
`

const ListTripsPage = () => {

    //teste integraçao API
    const [trips, setTrips] = useState([])

    const showAllTrips = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips"
     
        axios.get(url)
            .then((res) => {

                console.log("viagens:",res.data.trips)
                 setTrips(res.data.trips)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        showAllTrips()
    }, [])

    const history = useHistory()

    const goToAppFormPage = () => {
        history.push("/trips/application")
    }

    const backToHomePage = () => {
        history.goBack("/")
    }

    const allTrips = trips.map ((trip) => {
        return(
            <ContainerInfoTrip>
                <div>
                <p><b>Nome:</b>{trip.name}</p>
                <p><b>Descrição:</b>{trip.description}</p>
                <p><b>Planeta:</b>{trip.planet}</p>
                <p><b>Duração:</b>{trip.durationInDays}</p>
                <p><b>Descrição:</b>{trip.date}</p>
                </div>
            </ContainerInfoTrip>
        )
      })

    return (
        <div>

            <Container>
                <div>
                    <button onClick={backToHomePage}>Voltar</button>
                    <button onClick={goToAppFormPage}>Inscrever-se</button>
                    <h1>Lista de viagens</h1>
                    <p>{allTrips}</p>
                </div>
            </Container>
            {/* <ContainerInfoTrip>
                <div><p>{allTrips}</p></div>
         
            </ContainerInfoTrip> */}
        </div>
    )
    }

export default ListTripsPage