import React, { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { CardPosts } from './styled'
import useRequestData from '../../hooks/useRequestData'
import {  ContainerCinza } from './styled'
import { HeaderWhite } from './styled'
import  LogoHeader  from '../../img/logoheader.png'
import { useHistory } from 'react-router-dom'
import { goToHome } from '../../routes/Cordinators'
import { ContainerButtonHeader } from './styled'
import { ContainerUser } from './styled'

const Post = () => {

    const history = useHistory()

    const mostrarPosts = useRequestData([],`${BASE_URL}/posts`)
    
    // console.log(mostrarPosts)

    // const postsCards = mostrarPosts.map((post) => {
    //     return <CardPosts key={post.post_id}>
    //             <p><b>Usuário:</b>{post.username}</p>
    //             <p><b>Título:</b>{post.title}</p>
    //           {/* <p>Comentário:</p> */}
    //         <p>JA</p>
    //             </CardPosts>
                
        
    // } )


    return (
        <ContainerCinza>
            <HeaderWhite>
              

                <img src={LogoHeader} />
                <ContainerButtonHeader>
                <button onClick={() => goToHome(history)}>Voltar</button>
                </ContainerButtonHeader>
            </HeaderWhite>
        <div>
{/* <h1>Página de posts</h1> */}

<CardPosts>
    
    {/* <div>{postsCards}</div> */}
</CardPosts>


        </div>
        </ContainerCinza>
    )
}

export default Post