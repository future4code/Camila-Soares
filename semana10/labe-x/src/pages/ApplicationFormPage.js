import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import useForm from '../hooks/useForm'

const ContainerInput = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: center;


div{
width: 300px;   
}


 input{
    margin: 3px;
    width: 400px;
    height: 25px;
    border-radius: 3px;
    border: none;
} 
`

 const ApplicationFormPage = () => {
   


    const history = useHistory()

    const goToHomePage = () => {
        history.push("/")
    }
 
    const { form, onChange, cleanFields } = useForm({nome: "",idade: "", email:"",texto:"",profissao:"",pais:""})

    const cadastrar = (event) => {
        console.log("Form enviado!",form)
        event.preventDefault()
        cleanFields()
        alert("Aplicação enviada com sucesso! ")
    }


    return (

        <div>
         <h4>Page form</h4>
            <ContainerInput>
                
            <form onSubmit={cadastrar}> 
            <input placeholder="Escolha uma viagem" />
            <input name={"nome"} value={form.nome} onChange={onChange} placeholder="Nome" pattern={"^.{3,}"} title={"O nome deve ter no mínimo 3 letras"}
            required
            />
            <input name={"idade"} type={"number"} value={form.idade} onChange={onChange} placeholder="Idade"  required min={18} />

            <input name={"texto"} value={form.texto} onChange={onChange}  placeholder="Texto de candidatura"  pattern={"^.{30,}"} title={"O texto deve conter no mínimo 30 caracteres"} required /> 

            <input name={"profissao"} value={form.profissao} onChange={onChange}  placeholder="Profissão" pattern={"^.{10,}"} title={"A profissão deve conter no mínimo 10 caracteres"} required />

            <input name={"pais"} value={form.pais} onChange={onChange}  placeholder="Escolha um país" required />

            <button>Enviar</button>

            </form>
            
            </ContainerInput>
            <button onClick={goToHomePage}>Voltar</button>
        </div>
    )
}

 export default ApplicationFormPage