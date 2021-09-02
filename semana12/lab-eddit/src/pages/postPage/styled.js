import React from 'react'
import styled from 'styled-components'

export const Header = styled.div`
 position: relative;
  height: 400px;
  background-image: linear-gradient(#ff9d2f, #ff6126);
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;

  /* h1{
      color: white;
      font-size: 80px;
  } */
`

// export const ContainerTitleHeader = styled.div`
// display: flex;
// align-items: center;
// justify-content: center;

// h1{
//     margin-bottom: 140px;
// }

// `

export const ContainerImgReddit = styled.div`
display:flex;
flex-direction: row;
align-items: flex-end;
margin-top: 18px;

img{
    height: 160px;
    margin: 2px;
}
`
export const ContainerLogoHeader = styled.div`
display: flex;
align-items: center;
justify-content: center;

img{
    height: 400px;
}

`

export const ContainerButton = styled.div`
display: flex;
align-items: center;
justify-content: center;

button{
    width: 200px;
    height: 40px;
    background-color: #FF6226;
    margin: 5px;
    margin-top: 2px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: white;

:hover{
    background-color: #F89834;
}
}
`



