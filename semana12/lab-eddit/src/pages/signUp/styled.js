import styled from 'styled-components'

export const ContainerTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
h1{
    color: #FF6226;
    font-size: 70px;
    margin-bottom: 330px;
}
`

export const ContainerInput = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 600px;
margin-top: -280px;
margin-left: 455px;

input{ 
    width: 320px;
    height: 40px;
    outline: none;
    background-color: #EDF5F1;
    border: none;  

    :hover {
      background-color: #E5ECE9;
      border: none;
}  
} `

export const ContainerInputSenha = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-right: 25px;

input{
   margin-top: 20px;
    margin: 2px;
    width: 320px;
    height: 40px;
    outline: none;
    background-color: #EDF5F1;
    border: none;    
    
:hover {
      background-color: #E5ECE9;
      border: none;
}
}
`


export const ContainerButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 25px;
margin-left: 180px;

button{
    width: 200px;
    height: 40px;
    background-color: #FF6226;
    margin: 5px;
    color: white;

:hover{
    background-color: #F89834;
}
}
`

export const ContainerButtonExterno = styled.div`
/* margin-bottom: 230px; */
margin-left: 300px;

button{
    width: 200px;
    height: 40px;
    background-color: #FF6226;
    margin: 5px;
    margin-top: -67px;
    margin-left: 240px;
    color: white;

:hover{
    background-color: #F89834;
}
}
`

export const ContainerWhite = styled.div`
display: flex;
align-items: center;
justify-content: center;

h1{
    text-align: center;
    color: #FF6226;
    font-size: 70px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

div{
    width: 700px;
    height: 460px;
    background-color: white;
    border-radius: 10px;
    margin-top: 85px;
} `