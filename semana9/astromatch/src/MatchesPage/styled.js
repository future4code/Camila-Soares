import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

const ContainerLista = styled.div`
    padding: 50px;
    display: flex; 
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;


 div {
    background-color: white;
    box-shadow: 0 3px 2px 2px rgba(160,160,160,0.1);
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
`

const ContainerWhite = (props) => {

    const [matches, setMatches] = useState({})

    const showMatchList = () => {
        const urlList = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camila-soares-lovelace/matches"
        axios.get(urlList)
            .then((res) => {
                setMatches(res.data.matches)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        showMatchList()
    }, [])
    return (
        <ContainerLista>
            <div>
                <h1>Astromatch</h1>
                {showMatchList()}
            Lista de matches!
            </div>
        </ContainerLista>
    )
}

export default ContainerWhite

