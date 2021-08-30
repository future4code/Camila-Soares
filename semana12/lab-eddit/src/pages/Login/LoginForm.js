import React from 'react'
import { useHistory } from 'react-router-dom' 
import { ContainerInput } from './styled'
import { ContainerButton } from './styled'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import  useForm  from '../../hooks/useForm'
// import { goToRegistration } from '../../routes/coordinator'

const LoginForm = () => {



    const [form, onChange , clear] = useForm({email: "",password:""})
  
    const onSubmitForm = (event) => {
        event.preventDefault()

    }



    const history = useHistory()

    const goToRegistration = () => {
        history.push("/registration")
    }

    console.log(form)

    return(
        
        <div>
           
            <ContainerInput>
            <div>
                <form onSubmit={onSubmitForm}>
                    <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                    />

                    <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}
                    />
                    
                        <Button
                        type={"submit"}
                         variant={"outlined"}
                         fullWidth
                         color={"primary"}
                         margin={"normal"}
                         >
                        Entrar
                        </Button>
                        
                        <Button
                        onClick={() => goToRegistration(history)}
                        type={"submit"}
                         variant={"text"}
                         fullWidth
                         color={"primary"}
                         margin={"normal"}
                         >
                        Cadastrar
                        </Button>
                        <ContainerButton>
            </ContainerButton>
                    
        </form>
        
               </div>

        </ContainerInput>
       
        </div>
    )
}

export default LoginForm