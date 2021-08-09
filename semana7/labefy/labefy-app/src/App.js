import axios from 'axios'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div `
/* display: flex;
flex-direction: center;
align-items: center;
justify-content: center; */
display: flex;
flex-direction: center;
align-items: center;
justify-content: center;
background-color: aqua;


`

const ContainerTitulo = styled.div`
color: white;
width: 300px;
background-color: aqua;


`

const PositionInput = styled.div`
display: flex;
flex-direction: flex-end;
align-items: flex-end;
padding: 3px;
`

// const ContainerInput = styled.div `
// display: flex;
// flex-direction: center;
// align-items: center;
// `


document.body.style = "background: black;";


export default class App extends React.Component{
  state = {
    playlist: ""
  }

  criarPlaylists = () => {
    const body = {
      name: "Playlist animada"
    }
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    axios.post (url, body , {
      headers: {
        Authorization: "camila-soares-lovelace"
      }
    })
    .then((response) =>{
      console.log(response.data)

    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }

render(){
  const listaPlaylist = this.state.playlist
  return(
    <div>
      <Container>
        <ContainerTitulo>
      <h1>Bem vindo ao Labefy</h1>
      <p>Crie uma playlist :)</p>
      </ContainerTitulo>
      </Container>
      <PositionInput>

      
     
      <button>Enviar</button>
      {listaPlaylist}
      <input 
      placeholder={"Digite uma música"}
      />
     <input />
     <input />
      
      </PositionInput>
      
      </div>
  )
}
}