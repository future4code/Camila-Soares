// import axios from 'axios'
// import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'

// const Teste = () => {


// const [email,setEmail] = useState("")
// const [password, setPassword] = useState("")
// console.log("email e senha:", email,password)
// const onChangeEmail = (event) => {
//     setEmail(event.target.value)
// }

// const onChangePassword = (event) => {
//     setPassword(event.target.value)
// }


// const url= "https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-soares-lovelace/login"
// const body = {
//     email: email,
//     password: password
// }
// axios.post(url,body)
// .then((res)=>{
//     console.log("deu certo",res.data)
// }) 
// .catch((err) =>{
//     console.log("não deu certo",err.res)
// })


 
// const history = useHistory()

// const goToAdmPage = () => {
//     history.push("/admin/trips/list")
// }

//     return(
//         <div>
//             <h1>Admin Home Page!! ;D </h1>
//             <input 
//             placeholder="Email"
//             value={email}
//             onChange={onChangeEmail}
//             />
//             <input 
//             placeholder="Senha"
//             value={password}
//             onChange={onChangePassword}
//             />
//             <button> Voltar</button>
//             <button onClick={goToAdmPage}>Entrar</button>
//         </div>
//     )
// }

//  export default AdminHomePage