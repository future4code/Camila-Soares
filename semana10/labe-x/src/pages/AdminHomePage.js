import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const AdminHomePage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

   console.log("email e senha:", email,password)

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)

    }

    const onSubmitLogin = () => {


        const body = {
            email: email,
            password: password
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-soare-lovelace/login", body)
            .then((res) => {
                console.log("deu certo", res.data)

                history.push("/admin/trips/create")


            })
            .catch((err) => {
                console.log("não deu certo", err)
            })

    }


    // const goToAdminPage = () => {
    //        history.push("/admin/trips/create")

    // }

    // const goToAdmPage = () => {
    //     history.push("/admin/trips/list")
    // }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <input
                    placeholder={"Email"}
                    type={"email"}
                    required
                    value={email}
                    onChange={onChangeEmail}
                />

                <input
                    placeholder={"Senha"}
                    type={"password"}
                    required
                    value={password}
                    onChange={onChangePassword}
                />
                {/* <button onClick={goToHomePage}>Voltar</button> */}
                <button onClick={onSubmitLogin}>Entrar</button>

            </form>
        </div>
    )
}

export default AdminHomePage