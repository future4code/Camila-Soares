import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import TelaAtividade1 from './components/TelaAtividade1'

document.body.style = "background: #f1f4fb;";

const PositionButton = styled.div`
display: flex;
justify-content: center;
align-items: center;

button{
  /* margin-left: 800px; */
  border-radius: 10rem;
  border: none;
  cursor: pointer;
  width: 130px;
  height: 40px;
  background-color: #89afe0;
  color: white;

}

button:hover{
  background-color: #3a5985;
}
`

const PositionTitle = styled.div`
display: flex;
flex-direction: center;
align-items: center;
justify-content: center;


h1{
  color: #3a5985;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}



`
const Container = styled.div `
width: 500px;
height: 240px;
background-color: white;
border-radius: 10px;
box-shadow: 0px 0px 2px #e4cdd5; 
padding: 10px;

p{
  font-size: 16px;
  color: black;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

h2{
  color: #89afe0;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

`

const PositionContainer = styled.div `

display: flex;
justify-content: center;
align-items: center;
padding: 20px;
`
export default class App extends React.Component {
  
  state = {
    activity: {}
  }



getActivity = () => {
  axios.get("http://www.boredapi.com/api/activity/")
  .then((res) =>{
    console.log(res.data);
    this.setState({activity: res.data})
  })
.catch((err) => {
  console.log(err);
});
};



render() {
  return(
    
    
<div>
<PositionTitle>
      <h1>Está entediado?</h1>
      </PositionTitle>
      <PositionButton>
      <button onClick={this.getActivity}>Clique aqui!</button>
      </PositionButton>
      <PositionContainer>
      <Container>
      <h2>Atividade</h2>
      <p><b>Nome:</b> {this.state.activity.activity}</p>
      <p><b>Tipo:</b>{this.state.activity.type}</p> 
      <p><b>Participantes:</b>{this.state.activity.participants}</p>
      <p><b>Preço:</b>{this.state.activity.price}</p>
      
      </Container>
      </PositionContainer>
     
      </div>
  )
  
}
}

