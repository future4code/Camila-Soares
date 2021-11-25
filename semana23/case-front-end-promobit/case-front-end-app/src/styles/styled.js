import styled from 'styled-components'

export const Header = styled.div`
height: 80px;
background-color: #0F1114;
 /* box-shadow:0 0 5px 3px #6A6666; */


h1{
    font-family: 'Baloo Tamma 2', cursive;
    color: white;
    margin: 0;
    padding: 0;
    font-size: 65px;
    text-shadow: -1px -1px 0px #0F1114,
    3px 3px 0px #0F1114,
    6px 6px 0px #A90707;
    margin-left: 40px;
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
    margin-top: 27vw;
    right: 300px;
    position: relative;

 &.stars{
    width: 50px;
    height: 30px;
    border-radius: 3px;
    text-align: center;
    /* position: relative; */
    right: 57.2vw;
    /* margin-top: -2px; */
}

::selection{
    background-color: #0F1114;
    color: white;
}
}



`

export const GridMovies = styled.div`
/* img{
    width: 100%;
} */

div{
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 2px;

}
`

export const PositionIconCamera = styled.div`
margin-left: 460px;
position: relative;
top: -85px;

`

export const ContainerInput = styled.div`
margin-top: 3vw;
margin-left: 80vw;
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


`

export const ButtonSearch = styled.div`
margin-left: 94vw;
margin-top: -185.4vw;

button{
    background-color: #4B4B4B;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    width: 40px;
    height: 40px;

:hover{
    background-color: #767B78;
}
}
`
