import { TextField } from '@material-ui/core'
import React from 'react'
import { ContainerInput } from './styled'
import { ContainerButton } from './styled'
import { ContainerWhite } from './styled'
import { Button } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'
import { goToHomePage } from '../../routes/Cordinators'
import { ContainerInputEmail } from './styled'
import { ThemeProvider } from 'styled-components'
import theme from '../../constants/theme'
import { ContainerButtonExterno } from './styled'

const LoginForm = () => {

    const history = useHistory()
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        login(form, clear, headers, history)
        event.preventDefault()
    }

    const headers = {
        "Content-Type": "application/json"
    }



    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <ContainerWhite>
                    <div> 
                        <h1>Login</h1>
                    </div>
                </ContainerWhite>
                <ContainerInput>
                    <input
                        placeholder={"E-mail"}
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        type={"email"}
                        required
                    />
                </ContainerInput>
                <ContainerInputEmail>
                    <input
                        placeholder={"Senha"}
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        type={"password"}
                    />
                </ContainerInputEmail>
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
                <ContainerButtonExterno>
                <Button
                    onClick={() => goToHomePage(history)}
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    Voltar
                </Button>
                </ContainerButtonExterno>
            </form>
        </div>
    )
}

export default LoginForm