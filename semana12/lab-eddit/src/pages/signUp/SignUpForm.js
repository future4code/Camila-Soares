import React from 'react'
import { TextField } from '@material-ui/core'
import { ContainerTitle } from '../login/styled'
import { ContainerInput } from '../login/styled'
import { ContainerButton } from '../login/styled'
import { useHistory } from 'react-router-dom'
import useForm  from '../../hooks/useForm'
import { Button } from '@material-ui/core'
import { signUp } from '../../services/user'

const IntegracaoSignUp = () => {

const history = useHistory()

const [form, onChange, clear] = useForm({username:"",email:"",password:""})

const headers = {
    "Content-Type": "application/json"
}



const onSubmitSignUp = (event) => {
    console.log("Cadastro de usuario",form)
    event.preventDefault()
    signUp(form,clear,history,headers)

}

    return(
        <div>
            <ContainerTitle>
            <h1>SignUp Integracao</h1>
            </ContainerTitle>
            <form onSubmit={onSubmitSignUp}>
            <ContainerInput>
            
            <TextField
            value={form.username}
            name={"username"}
            label={"Nome de usuário"}
            required
            onChange={onChange}
            />

           

            <TextField
            value={form.email}
            name={"email"}
            label={"Email"}
            required
            type={"Email"}
            onChange={onChange}
            />

            

            <TextField
            value={form.password}
            name={"password"}
            label={"Senha"}
            required
            type={"password"}
            onChange={onChange}
            />

            
          
            </ContainerInput>
           
            <ContainerButton>
            <Button
            type={"submit"}
            >
                Cadastrar
            </Button>
            </ContainerButton>
            </form>
        </div>
    )
}

export default IntegracaoSignUp