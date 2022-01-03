import styled from 'styled-components'

document.body.style = "background-color: #E3E3E3"

export const Title = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
top: 4vw;
h1{
    font-family: 'Poppins';
    font-size: 40px;
    color: #357D18;
}


img{
    width: 60px;
    height: 60px;
    margin: 13px;
}
`


export const Subtitle = styled.div`
display: flex;
align-items: center;
justify-content: center;

h2{
    text-align: center;
    font-family: 'Poppins';
    font-size: 20px;
    color: black;
    margin: 40px;

}
`

export const ContainerInfo = styled.div`
display: flex;
align-items: center;
justify-content: center;



`

export const InformacoesBike = styled.div`
width: 830px;
height: 420px;
background-color: white;
box-shadow: 5px 5px 5px #B4B5B4;
margin: 40px;
border-radius: 4px;

p{
    font-family: 'Poppins';
  

}

b{
    font-size: 23px;
    text-align: center;

}

button{
    background-color: green;
}
`

export const ContainerInput = styled.div`
display: flex;
align-items: center;
justify-content: center;

input{
    width: 600px;
    height: 40px;
    outline: none;
    font-family: 'Poppins';
}

`