import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect } from 'react'

document.body.style = "background: #E1E8E5"

const ContainerPai = styled.div`
    padding: 50px;
    display: flex; 
    align-items: center;
    flex-direction: column;
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;

 div {
    background-color: white;
    box-shadow: 0 3px 2px 2px #C2C7C5;
    width: 340px;
    height: 460px;
    border-radius: 5px;
} 

h1{
    color: #EF0A82;
    font-size: 25px;
    text-align: center;
    font-family: monospace;
}

h2{
    font-size: 20px;
}

img{
    padding: 1px;
    width: 320px;
    height: 240px;
    border-radius: 3px;
    margin: 10px;
    

:hover{
    filter: drop-shadow(8px 8px 10px gray);
    filter: opacity(80%);
}}

button{
    margin-top: -20px;
    margin: 1px;
    background-color: #EF0A82;
    border: 1px solid #D92963;
    color: white;
    cursor: pointer;
    border-radius: 5px;

:hover{
    background-color: #EE7EB9;
}
}
`

export const ContainerBranco = () => {

    const [profile, setProfile] = useState({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camila-soares-lovelace/person"

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

    const ChoosePerson = (choice) => {
        const body = {
            "id": profile.id,
            "choice": choice
        }
        const urlPerson = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camila-soares-lovelace/choose-person"
        axios.post(urlPerson, body)
            .then((response) => {
                escolherPerfil();
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    const like = () => {
        ChoosePerson(true)
    }

    const noLike = () => {
        ChoosePerson(false)
    }

const clearMatches = () => {
    const urlMatches = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camila-soares-lovelace/clear"
    const body = {
        id: profile.id
    }
    axios.put(urlMatches,body)
    .then((res)=>{
        escolherPerfil()
    })
    .catch((err) => {
        console.log(err)
    })
}
    return (
        <div>

            <ContainerPai>
                <div>
                    <h1>Astromatch</h1>
                    <h2>{profile.name},{profile.age}</h2>
                    <p>{profile.bio}</p>
                    <img src={profile.photo} />
                    <button onClick={like}>X</button>
                    <button onClick={noLike}>♥</button>
                    <button onClick={clearMatches}>Limpar matches</button>

                </div>
            </ContainerPai>

        </div>
    )
}
