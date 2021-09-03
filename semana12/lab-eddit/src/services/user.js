import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToPostPage } from '../routes/Cordinators'

export const login = (body,clear,headers,history) => {
    axios.post(`${BASE_URL}/users/login`,body,headers) 
    .then((res) => {
        console.log(res)
        window.localStorage.setItem("token", res.data.token)
        clear()
        history.push('/signUp')
        // goToSignUpPage(history)
    })
    .catch((err) =>{
        alert("Erro no login!")
    })
}

export const signUp = (body,clear,history) => {
    
    axios.post(`${BASE_URL}/users/signup`,body)
    .then((res) => {
        window.localStorage.setItem("token",res.data.token)
        clear()
        goToPostPage(history)
        // history.push('/post')
    })
    .catch((err) => {
        console.log(err.response.data)
    })
}