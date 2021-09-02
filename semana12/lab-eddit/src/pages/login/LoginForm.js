import { TextField } from '@material-ui/core'
import React from 'react'
import { ContainerInput } from './styled'
import { ContainerButton } from './styled'
import { Button } from '@material-ui/core'
import  useForm  from '../../hooks/useForm'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'

const LoginForm = () => {

    const history = useHistory()
    const [form, onChange, clear] = useForm({email:"",password:""})

    const onSubmitForm = (event) => {
        login(form,clear,headers,history)
        event.preventDefault()
    }

    const headers = {
        "Content-Type": "application/json"
    }

   
   
    return(
        <div>
            
            <form onSubmit={onSubmitForm}>

            <ContainerInput>
                    <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    margin={"normal"}
                    type={"email"}
                    required
                    >
                       
                    </TextField>
                    <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    
                    margin={"normal"}
                    type={"password"}
                    required
                    >
                    
                    </TextField>
                  
            
            </ContainerInput>
            <ContainerButton>
            <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            >
                Entrar
                </Button>
               
            </ContainerButton>
            </form>
            
        </div>
    )
}

export default LoginForm