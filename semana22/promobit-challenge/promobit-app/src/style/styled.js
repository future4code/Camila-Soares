import styled from 'styled-components'

export const ContainerCentral = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 2vw;

h1{
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
    color: white;
    background: -webkit-linear-gradient(#C720B7, #20C7C0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`

export const ContainerInput = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 1vw;
input{
    width: 360px;
    height: 48px;
    background-color: #2B2B2B;
    border: 1px solid #171717;
    outline: none;
    color: white;
    font-family: 'Poppins';

::placeholder{
    color: #989E9E;
    font-family: 'Poppins';
    font-size: 15px;

}
}

button{
    background-color: transparent;
    cursor: pointer;
    border: none;

}
`

export const ContainerInfo = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 2vw;
 
`

export const Creditos = styled.div`
display: flex;
align-items: flex-end;
justify-content: flex-end;
margin-right: 1vw;
margin-top: 2vw;
p{
    font-family: 'Poppins';
    color: white;
}


`
