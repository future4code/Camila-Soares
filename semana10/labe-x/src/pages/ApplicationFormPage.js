import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import useForm from '../hooks/useForm'

const ContainerInput = styled.div`
display: flex;
flex-direction: column;
align-items: center;


input{
    margin: 5px;
    width: 500px;
    height: 25px;
    border-radius: 3px;
    border: none;
    display: flex;
    flex-direction: column;
} 


`

const ContainerButton = styled.div`


div{
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;

}

button{
    padding: 3px;
    margin: 12px;
    background-color: #E85887;
    width: 120px;
    height: 35px;
    border-radius: 12px;
    cursor: pointer;
    border: 1px solid #C72057;

:hover{
    background-color: #F796B6;
}
}
`

const ContainerTitle = styled.div`

h1{
    font-size: 35px;
    color: #E85887;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
}
`


const ApplicationFormPage = () => {



    const history = useHistory()

    const goToHomePage = () => {
        history.push("/")
    }

    const { form, onChange, cleanFields } = useForm({ nome: "", idade: "", email: "", texto: "", profissao: "", pais: "" })

    const cadastrar = (event) => {
        console.log("Form enviado!", form)
        event.preventDefault()
        cleanFields()
        alert("Aplicação enviada com sucesso! ")
    }


    return (

        <div>
            <ContainerTitle>
                <h1>Inscreva-se para uma viagem</h1>
            </ContainerTitle>

            <ContainerInput>
                <form onSubmit={cadastrar}>
                    <input placeholder="Escolha uma viagem" />
                    <input name={"nome"} value={form.nome} onChange={onChange} placeholder="Nome" pattern={"^.{3,}"} title={"O nome deve ter no mínimo 3 letras"}
                        required
                    />
                    <input name={"idade"} type={"number"} value={form.idade} onChange={onChange} placeholder="Idade" required min={18} />

                    <input name={"texto"} value={form.texto} onChange={onChange} placeholder="Texto de candidatura" required pattern={"^.{30,}"} title={"O texto deve conter no mínimo 30 caracteres"} />

                    <input name={"profissao"} value={form.profissao} onChange={onChange} placeholder="Profissão" pattern={"^.{10,}"} title={"A profissão deve conter no mínimo 10 caracteres"} required />

                    <input name={"pais"} value={form.pais} onChange={onChange} placeholder="Escolha um país" required />


                </form>
                <ContainerButton>
                    <div>
                        <button onClick={goToHomePage}>Voltar</button>
                        <button>Enviar</button>
                    </div>
                </ContainerButton>
            </ContainerInput>
        </div>
    )
}

export default ApplicationFormPage