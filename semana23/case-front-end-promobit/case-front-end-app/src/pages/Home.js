import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Header } from '../styles/styled'
import { BiCameraMovie } from 'react-icons/bi'
import { ContainerMovies } from '../styles/styled'
import { AiFillStar } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'
import { GridMovies } from '../styles/styled'
import { PositionIconCamera } from '../styles/styled'
import { ContainerInput } from '../styles/styled'
import { ButtonSearch } from '../styles/styled'

document.body.style = "background-color: #202329"

const Home = () => {

    const [searchMovie, setSearchMovie] = useState('')

    // const URL_IMG = "https://image.tmdb.org/t/p/w500/"

    const [movie, setMovie] = useState([])

    console.log("filmes api", movie)

    const requestMovie = () => {
        const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=83c8df1fefd93b4c0f4aab8f28598381"
        axios.get(url)
            .then((res) => {
                setMovie(res.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        requestMovie()
    }, [])




    const renderOnScreen = movie.filter((value) => {
        if(searchMovie == "") {
            return value
        } else if (value.toLowerCase().includes(searchMovie.toLowerCase())) {
            return value
        }
    }).map((film,key) => {
        return (<div key={key}>
         
            <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} /> 
            <p>{film.original_title}</p>
        
            {/* <p><b>{film.vote_average} </b>
            <AiFillStar
            color={'yellow'}
            size={12}
            /> 
            </p>  */}   
            {/* <button>Details</button>      */}
           
        </div>)
    })

    return (
        <div>
            <Header>
              
                <h1>Movies world</h1>

              <PositionIconCamera>
              <BiCameraMovie
                    color={'white'}
                    size={50}
                /> 
              </PositionIconCamera>

             
            </Header>

            <ContainerInput>
                    <input placeholder={"Pesquise um filme"}
                    type="text"
                    onChange={event => {setSearchMovie(event.target.value)}}
                    />

                    
                </ContainerInput>

              
  <GridMovies>

             
                <ContainerMovies>
                   
                    {renderOnScreen}
                   
                 
                </ContainerMovies>
      
           
               
              
            </GridMovies>  

            {/* <ButtonSearch>
                <button>
                    <BiSearchAlt2
                        color={'red'}
                        size={20}
                    />
                </button>
                </ButtonSearch> */}


        </div>
    )
}

export default Home