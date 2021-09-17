import React from 'react'
import axios from 'axios'
import { useState } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'


const ContainerTitle = styled.div`

h2{
    font-size: 50px;
    color: #E85887;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
}
`
const ContainerInput = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

input{
    margin: 5px;
    width: 500px;
    height: 25px;
    border-radius: 3px;
    border: none;
    display: flex;
    flex-direction: column;
} 
`
const ContainerButton = styled.div`


div{
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;


}

button{
    padding: 3px;
    margin: 12px;
    background-color: #E85887;
    width: 120px;
    height: 35px;
    border-radius: 12px;
    cursor: pointer;
    border: 1px solid #C72057;

:hover{
    background-color: #F796B6;
}
}`
const TripDetailsPage = () => {

    const history = useHistory()

    const goToAdminPage = () => {
        history.push("/admin/trips/list")
    }

    // const createTrip = () => {
    //     const [info,setInfo] = useState({name: "",planet: "", date:"",description:"",durationInDays:""})


    //     const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-soare-lovelace/trips"
    //     const headers = {
    //      "Content-Type": "application/json"
    //     }
    //     // 
    //     axios.post(url,body,headers)
    // }

    //teste input calendario


    return (
        <ContainerTitle>
            <h2>Criar viagem</h2>
            <form>
                <ContainerInput>
                    <div>
                        <input placeholder="Nome" required />
                        <input placeholder="Escolha um planeta" required />
                        <input placeholder="data" required />
                        <input placeholder="Descrição" required />
                        <input placeholder="Duração em dias" required />
                    </div>
                </ContainerInput>
                <ContainerButton>
                    <div>
                        <button onClick={goToAdminPage}>Voltar</button>
                        <button>Criar</button>
                    </div>
                </ContainerButton>
            </form>
        </ContainerTitle>

    )
}

export default TripDetailsPage