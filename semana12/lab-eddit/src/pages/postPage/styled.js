import styled from 'styled-components'

export const ContainerCinza = styled.div`
background-color: #D8DDDA;
height: 145vw;
`

export const HeaderWhite = styled.div `
background-color: white;
height: 60px;

img{
    width: 150px;
    height: 50px;
    margin-top: 5px;
}
`

export const ContainerUser = styled.div`
width: 150px;
height: 30px;
background-color: pink;
`


export const CardPosts = styled.div`
display:flex;
align-items: center;
justify-content: center;
/* margin: 10px; */

div{
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    border-radius: 10px;
    width: 400px;
    height: 200px;
    background-color: white;
    margin: 10px;
}

`

export const ContainerButtonHeader = styled.div`
display: flex;
justify-content: space-around;

button{
    width: 100px;
    height: 30px;
    border: 2px solid #FF6226;
    border-radius: 8px;
    background-color: white;
    cursor: pointer;
    margin-left: 820px;
    margin-top: -45px;
:hover{
        background-color: #FF6226;
    }

}

`