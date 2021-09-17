import React from 'react'
import { TextField } from '@material-ui/core'
import { ContainerTitle } from '../signUp/styled'
import { ContainerInput } from './styled'
import { ContainerButton } from './styled'
import { useHistory } from 'react-router-dom'
import useForm  from '../../hooks/useForm'
import { Button } from '@material-ui/core'
import { signUp } from '../../services/user'
import { ContainerWhite } from './styled'
import { goToHomePage } from '../../routes/Cordinators'
import { ContainerInputEmail } from '../login/styled'
import { ContainerInputSenha } from './styled'
import { ContainerButtonExterno } from './styled'

const IntegracaoSignUp = () => {

const history = useHistory()

const [form, onChange, clear] = useForm({username:"",email:"",password:""})

const headers = {
    "Content-Type": "application/json"
}



const onSubmitSignUp = (event) => {
    console.log("Cadastro de usuario",form)
    event.preventDefault()
    signUp(form,clear,history)

}

    return(
        <div>
            <ContainerWhite>
            <ContainerTitle>
            <h1>Cadastre-se</h1>
            </ContainerTitle>
            </ContainerWhite>
            <form onSubmit={onSubmitSignUp}>
            <ContainerInput>
            
            <input
            value={form.username}
            name={"username"}
            placeholder={"Nome de usuário"}
            required
            onChange={onChange}
            />
 </ContainerInput>
           <ContainerInputEmail>
           <input
           placeholder={"E-mail"}
           />
           </ContainerInputEmail>

           <ContainerInputSenha>
           <input
           placeholder={"Senha"}
           />
           </ContainerInputSenha>


            
          
           
           
            <ContainerButton>
            <Button
            type={"submit"}
            >
                Cadastrar
            </Button>
            </ContainerButton>
            </form>
            <ContainerButtonExterno>
            <Button 
            onClick={() => goToHomePage(history)}
            >Voltar
            </Button>
            </ContainerButtonExterno>
        </div>
    )
}

export default IntegracaoSignUp