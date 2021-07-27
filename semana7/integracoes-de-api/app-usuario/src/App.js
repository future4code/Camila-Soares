import React from 'react';
import './App.css';
// import axios from 'axios';
import styled from 'styled-components';

const ContainerInformacoes = styled.div`
width: 280px;
height: 280px;
margin-left: 500px;
border: 1px solid black;
`

 class App extends React.Component {

  state = {
    valorNome: '',
    valorEmail: ''
  }

  onChangeNome = (event) => {
    this.setState({valorNome: event.target.value})
  
  }

 onChangeEmail = (event) => {
   this.setState({valorEmail: event.target.value})
 }

  render()
  

 { return(

   <div>
  <button>Ir para página de lista</button>

<ContainerInformacoes>
<p>Nome:</p>
<input name={'nome'} onChange={this.onChangeNome} value={this.setState.valorNome}
/>
<p>E-mail:</p>
<input name={'email'} onChange={this.setState.onChangeEmail} value={this.setState.valorEmail}/> 
<button>Salvar</button>
</ContainerInformacoes>
</div>
  )
};
}

export default App