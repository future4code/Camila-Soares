import React from 'react'
import TelaCadastro from './components/TelaCadastro'
import TelaListaUsuario from './components/TelaListaUsuarios'

class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaTelaLista={this.irParaTelaLista}/>
        case "lista":
        return  <TelaListaUsuario  irParaTelaCadastro={this.irParaTelaCadastro}/>
        default:
          return <div>Erro! Página não encontrada!!</div>
    }
  }

  irParaTelaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }


  irParaTelaLista = () => {
    this.setState({telaAtual: "lista"})
  }
  
  render() {
    return (
      <div>
     {this.escolherTela()}

      </div>
    )
  }


}


export default App