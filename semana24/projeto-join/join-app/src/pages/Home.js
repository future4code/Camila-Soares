import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Title } from '../styles/styled'
import logo from '../img/logo-policia-berlim.png'
import { Subtitle } from '../styles/styled'
import { ContainerInfo } from '../styles/styled'
import { ContainerInput } from '../styles/styled'
import { InformacoesBike } from '../styles/styled'

const Home = () => {

    const [bike,setBike] = useState()
    const [itens, setItens] = useState([])
    const [itensPerPage,setItensPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)


    const pages = Math.ceil(itens.length / itensPerPage)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = itens.slice(startIndex, endIndex)
    
    const[searchTerm, setSearchTerm] = useState('')

    console.log("infos bike", bike)

    const InfosAPI = () => {
        axios.get("https://bikeindex.org/api/v3/search")
        .then((res) => {
            console.log(res)
            setBike(res.data.bikes)
        })
        .catch((err) => {
            console.log(err)
          
        })
    }

    useEffect(() => {
        InfosAPI()
    },[])


    const renderizaInfosNaTela = bike && bike.filter((val) => {
        if (searchTerm == '') {
            return val
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
        }

    }).map((dado,key) => {
        return (<div>
            <ContainerInfo >
                <InformacoesBike>
             <b><p>{dado.title}</p></b>
            <p>Year: {dado.year}</p>
             <p>Serial: {dado.serial}</p>
            <p>Date stolen: {dado.date_stolen}</p>
            <p>{dado.stolen_location}</p>
            <p>{dado.stolen_coordinates} </p>
            <p>{dado.status}</p>
            <p> {dado.frame_model}  </p>
            <p> {dado.frame_colors}  </p>
         
            </InformacoesBike>
            </ContainerInfo>
           
        </div>
        )
        
    })




    return(
        <div>
            <Title>
            <h1>Police Departament of Berlin</h1>
            <img src={logo} />
         
            </Title>

            <Subtitle>
            <h2>Stole bykes</h2>
            </Subtitle>
      
            <ContainerInput>
            <input placeholder={"Search case descriptions"} type={"text"} onChange={event => {setSearchTerm(event.target.value)}}/> 

            </ContainerInput>
      
            <div>
            {renderizaInfosNaTela}
            </div>

            <div> {Array.from(Array(pages), (item,index) => {
                return <button> {index} </button>
            })} </div>
            
        
        </div>
    )
}

export default Home



//