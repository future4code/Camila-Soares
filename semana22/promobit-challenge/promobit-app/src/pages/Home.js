import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Home = () => {

    const [movieInfo,setMovieInfo] = useState({})

    console.log("filmes!", movieInfo)
    const renderizaFilmesTela = () => {

        const url = "https://developers.themoviedb.org/3/movies/get-popular-movies"
        axios.get(url)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        renderizaFilmesTela()
    },[])
    return(
        <div>
            <h1>Home page</h1>
            
        </div>
    )
}

export default Home