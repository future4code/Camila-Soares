import React from 'react';
import styled from "styled-components";

const Container = styled.div`

display: flex;
flex-direction: column;

`



const ContainerPequeno = styled.div `
 background-color: white;
 width: 620px;
 height: 60px;
 border: 1px solid black;
`
const ContainerEndereco = styled.div `
 background-color: white;
 width: 620px;
 height: 60px;
 border: 1px solid black;
 margin-top: 20px;
`

const ContainerPosicionaTextoEmail = styled.div `
margin-left: 60px;
 background-color: white;
 margin-top: 20px;
`

const ConstainerPosicionaTextoEndereco = styled.div `
margin-left: 60px;
 background-color: white;
 margin-top: 20px;
`

function CardPequeno(props) {
    return (
        <Container>
      <ContainerPequeno>
        <ContainerPosicionaTextoEmail>
      <p><b>Email:</b> camila.soares19@hotmail.com</p>
      </ContainerPosicionaTextoEmail>
           </ContainerPequeno>

          <ContainerEndereco>
              <ConstainerPosicionaTextoEndereco>
 <p><b>Endereço:</b> Rua Labenu</p>
 </ConstainerPosicionaTextoEndereco>
              </ContainerEndereco> 
     
          </Container>
    )
}

export default CardPequeno;


