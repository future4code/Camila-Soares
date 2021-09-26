import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


document.body.style = "background: #EBF3EF;";


const ContainerUsuario = styled.div `
    background-color: white;
    box-shadow: 0px 0px 2px #e4cdd5;
    width: 300px;
    padding: 10px;
    margin: 10px;
    margin-left: 440px;
    display: flex;
    justify-content: space-between;


    button{
    margin: 9px;
    margin-left: 90px;
    text-decoration: none;
    background-color: white;
    border: 2px solid #D84778;
    color: black;
    cursor: pointer;
    transition:  all 0.4s ease 0s;

}
button:hover{
    color: black;
    background-color: pink;
    border-color: #D84778;
    transition: all 0.4s ease 0s;
}
`
const ContainerTitulo = styled.div`
text-align: center;

button{
    margin: 9px;
    margin-left: -980px;
    text-decoration: none;
    background-color: white;
    border: 2px solid #D84778;
    color: black;
    cursor: pointer;
    transition:  all 0.4s ease 0s;

}
button:hover{
    color: black;
    background-color: pink;
    border-color: #D84778;
    transition: all 0.4s ease 0s;
}

h2{
    color: #C3275B;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

`
export default class TelaListaUsuario extends React.Component {
    state = {
        usuarios: []

    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
       axios.get (url, {
        headers: {
            Authorization: "camila-soares-lovelace"
        }
       })
       .then((res) => {
        this.setState({usuarios: res.data})
    })
       .catch((err) => {
        alert("Erro! Tente novamente!")
        })
        
        
  }

  deletarUsuarios = (id) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
      
    axios.delete(url,{
        headers: {
            Authorization: "camila-soares-lovelace" }
    }) 
    .then((res) => {
        alert("Usuário(a) deletado(a)!")
        this.pegarUsuarios()
    })
    .catch((err) => {
        alert("Erro! Tente novamente!")
    })

  }


    render(){
        const listaNomes = this.state.usuarios.map((user) => {
            return (
            <ContainerUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuarios(user.id)}>X</button>
                </ContainerUsuario>
        )
     })
    

        return(
            <div>
                <ContainerTitulo>
                <button onClick={this.props.irParaTelaCadastro}>Ir para cadastro</button>
                <h2>Lista usuários</h2>
                </ContainerTitulo>
                {listaNomes}
            </div>
        )
    }
 
}