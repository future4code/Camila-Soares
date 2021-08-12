import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect } from 'react'

document.body.style = "background: #E1E8E5;"

const ContainerPai = styled.div`
display: flex; 
align-items: center;
/* justify-content: flex-start; */
flex-direction: column;


 div {
    background-color: white;
    box-shadow: 0 3px 2px 2px rgba(160,160,160,0.1);
    width: 300px;
    height: 460px;
    border-radius: 5px;
} 

h1{
    color: #EF0A82;
    font-size: 25px;
    text-align: center;
    font-family: monospace;
}

img{
    width: 200px;
    height: 150px;
}


button{
    margin: 30px;
    background-color: #EF0A82;
    border: 1px solid black;
    color: white;
    cursor: pointer;

:hover{
    background-color: #EE7EB9;
}
}
`


export const ContainerBranco = () => {

    const [profile, setProfile] = useState({})

   
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:camila-soares-lovelace/person"


    const escolherPerfil = () => {
        axios.get(url)
            .then((res) => {
                setProfile(res.data.profile)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        escolherPerfil()
    }, [])

    const choosePerson = () => {
        const [person, setPerson] = useState({})

        const body = {
            id: id,
            choice:  true
        }
        const headers =  "Content-Type: application/json"
        const urlPerson = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:camila-soares-lovelace/choose-person"
        console.log("entrei")
        axios.post(urlPerson,headers,body)
        .then((res) => {
            console.log(res)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    //AQUI TERMINA O TESTE

    return (
        <ContainerPai>
            <div>
                <h1>Astromatch</h1>
                <h2>{profile.name}, {profile.age}</h2>
                <p>{profile.bio}</p>
                <img src={profile.photo} />
                {/* <button>Lista Matches</button> */}
                <button onClick={choosePerson}>X</button>
                <button onClick={choosePerson}>❤</button>
            </div>
        </ContainerPai>
    )
}
