import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const ContainerCadastro = styled.div `
 background-color: white; box-shadow: 0px 0px 2px #e4cdd5;
padding: 10px;
margin: 10px;
width: 250px;
margin-left: 460px;
margin-top: 40px;

input{
    margin: 3px;
    margin-left: 50px;
    border: 1px solid #D84778;
    background-color: #EFF0EF;
    
}

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

h2{
    text-align: center;
}
`

const ContainerTitulo = styled.div`
text-align: center;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

button{
    margin: 9px;
    margin-left: -990px;
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


export default class TelaCadastro extends React.Component{
    state = {
    nome: "",
    email: ""
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
    const url= "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
        name: this.state.nome,
        email: this.state.email
    }
    axios.post(url,body, {
    headers: {
        Authorization: "camila-soares-lovelace"

    }
    }) 
    .then((res) => {
        alert("Usuário cadastrado(a) com sucesso!")
        this.setState({nome: "",email: ""})
    })
    .catch((err) => {
         alert(err.response.data.message)
     
    })

    }

render(){
    return(
        <div>
        <ContainerTitulo>
        <button onClick={this.props.irParaTelaLista}>Ir para a lista de usuários</button>

        <h2>Cadastro</h2>
        </ContainerTitulo>

        <ContainerCadastro>

            <input 
                placeholder={"Nome"} 
                value={this.state.nome}
                onChange={this.handleNome}
            />
            <input
             placeholder={"E-mail"}
             value={this.state.email}
             onChange={this.handleEmail}
             />
            <button onClick={this.fazerCadastro}>Cadastrar</button>
            </ContainerCadastro>
        </div>
    )
}
}