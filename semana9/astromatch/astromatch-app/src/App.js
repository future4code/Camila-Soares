import React, { useState } from 'react'
import HomePage from './HomePage/HomePage'
import MatchesPage from './MatchesPage/MatchesPage'

const App = () => {
  const [pageHome,setPageHome] = useState(1)

 const changePage = (event) => {
   if(event.target.innerHTML === "02") {
     setPageHome(1);
   } else {
    setPageHome(2);
   }
 }

 const renderPage = () => {
   if (pageHome === 1) {
     return <HomePage />
   } else {
     return <MatchesPage />
   }
 }

  //renderização condicional
  //estado que diz qual tela esta aparecendo
  // uma função pra mudar de tela
  //usar case switch case
  return(
    <div>
     <p>Escolher tela!</p>
     <button onClick={changePage}>01</button>
     <button onClick={changePage}>02</button>
      
      {renderPage()}
    </div>
  )
}

export default App