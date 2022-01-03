import styled from 'styled-components'

export const Header = styled.div`
height: 80px;
background-color: #0F1114;


h1{
    font-family: 'Baloo Tamma 2', cursive;
    color: white;
    margin: 0;
    padding: 0;
    font-size: 2.3rem;
    text-shadow: -1px -1px 0px #0F1114,
    3px 3px 0px #0F1114,
    6px 6px 0px #A90707;
    margin-left: 40px;
}

@media screen and (max-width: 600px) {
    h1{
        position: relative;
        top: 30px;
    }
}

@media screen and (min-width: 900px){
    h1{
        font-size: 4rem;
    }
}

`

export const ContainerMovies = styled.div`

img{
    width: 300px;
    height: 400px;
    border-radius: 4px;
    transition: 0.3s;
:hover{
    transform: scale(1.1);
}
}

div{
width: 300px;
height: 540px;
background-color: #363A42;
margin: 30px;

}

p{
    color: white;
    font-family: 'Poppins', sans-serif;
    width: 280px;


 &.stars{
    width: 50px;
    height: 30px;
    border-radius: 3px;
    text-align: center;
    right: 57.2vw;
    
}

::selection{
    background-color: #0F1114;
    color: white;
}
}


@media screen and (max-width: 700px) {
   img{
    width: 100%;
 
   }
}
`

export const GridMovies = styled.div`

div{
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 2px;
flex-wrap: wrap;
}

@media screen and (max-width:600px) {
   div{
    width: 100%;
    display: flex;
  flex-wrap: wrap;
   }
}

@media screen and (min-width: 700px) {
   div{
    /* width: 100%; */
    display: flex;
  flex-wrap: wrap;
   }
}
`

// export const PositionIconCamera = styled.div`
// /* margin-left: 460px; */
// /* position: relative; */
// /* top: -85px; */

// @media screen and (max-width: 600px){
//     width: 40%;
// }
// `

export const ContainerInput = styled.div`
display: flex;
align-items: flex-end;
justify-content: flex-end;
margin: 10px;

input{
    width: 200px;
    height: 40px;
    background-color: #4B4B4B;
    border-radius: 3px;
    border: none;
    color: #E5EBE8;
    outline: none;
    font-family: 'Poppins', sans-serif;

::placeholder{
    color: #BEC1C0;
}
}

@media screen and (max-width: 600px) {
    input{
        width: 50%;
    }
}

`
