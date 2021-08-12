import React, { useState } from 'react'
import HomePage from './HomePage/HomePage'
import MatchesPage from './MatchesPage/MatchesPage'
import styled from 'styled-components'

const BoxButton = styled.div`

div{
  display: flex;
flex-direction: row;
justify-content: center;
}

button{
  background-color: #EF0A82;
  color: white;
  border: 1px solid black;
  margin: 4px;
  cursor: pointer;

  :hover{
    background-color: #EE7EB9;
  }
}

`

const App = () => {
  const [page,setPage] = useState("Início")

const escolherTela = () => {
  switch (page) {
    case "Início":
    return <HomePage />
    case "Lista":
      return <MatchesPage />
  }
}

const irParaHome = () => {
  setPage("Início")
}

const irParaMatches = () => {
  setPage("Lista")
}

const limparMatches = () => {
  console.log("O botão vai limpar os matches")
}

  return(
    <div>
     <BoxButton>
       <div>
     <button onClick={irParaHome}>Início</button>
     <button onClick={irParaMatches}>Lista</button>
     </div>
     <button onClick={limparMatches}>Limpar matches</button>
     </BoxButton>
      {escolherTela()}
    </div>
  )
}

export default App