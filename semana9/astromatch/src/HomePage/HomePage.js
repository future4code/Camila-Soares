// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
 import {ContainerBranco} from './styled'



const HomePage = () => {

// const [profile,setProfile] = useState({})

// const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:camila-soares-lovelace/person"

// const escolherPerfil = () => {
//     axios.get(url)
//     .then((res) => {
//         setProfile(res.data.profile)
//     })
//     .catch((err) => {
//         console.log(err.response)
//     })
// }

// useEffect(() => {
//     escolherPerfil()
// },[])
   
return (
    <div>
    <ContainerBranco/>    
        {/* <div>     
<h2>{profile.name}, {profile.age}</h2>
<p>{profile.bio}</p>
<img src={profile.photo} />
</div>  */}
</div>
)}

export default HomePage


