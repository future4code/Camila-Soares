import React from 'react'
import axios from 'axios'

export default class TelaAtividade1 extends React.Component {
    state = {
        activity: ""
    }

pegarAtividades = () => {
    axios.get ("http://www.boredapi.com/api/activity/")
    .then((res) => {
        console.log(res.data);
        this.setState({activity: res.data})
    })
    .catch((err) => {
        console.log(err);
    });
}
    render(){
        const{activity,type,participants,price} = this.state.activity
        return(
            <div>
                <h3><b>Atividade</b></h3>
                <p>Nome: {activity}</p>
                <p>Tipo: {type}</p>
                <p>Participantes: {participants}</p>
                <p>Preço: {price}</p>
                <button onClick={this.getActivity}>Clique aqui!</button>
            </div>
        )
    }
}