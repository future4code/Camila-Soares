import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./PokeCard/index";


function App () {
 const [pokeList,setPokeList] = useState([])

const [pokeName,setPokeName] = useState('')

  const procuraListaPokemon = () => {
    const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`) 
    .then(response => setPokeName(response.data))
    .catch(error => console.log(error))
  }

  useEffect( () => {
    procuraListaPokemon()
  },[])



return(
  <div>
    <h1>Lista de pokemon</h1>
    </div>
)
}

export default App