import React, { useEffect, useState } from 'react'
import { ContainerCentral } from '../style/styled'
import { ContainerInput } from '../style/styled'
import { ContainerInfo } from '../style/styled'
import { Creditos } from '../style/styled'
import { BiSearch } from 'react-icons/bi'
import { Form , Card, Image, Icon} from 'semantic-ui-react'

document.body.style = "background-color: #141816;"

const Home = () => {

    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [followers, setFollowers] = useState('')
    const [following, setFollowing] = useState('')
    const [repos, setRepos] = useState('')
    const [avatar, setAvatar] = useState('')
    const [userInput, setUserInput] = useState('')


    useEffect(() => {
        fetch('https://api.github.com/users/example')
        .then(res => res.json())
        .catch(data => {
            console.log(data)
            setData(data)
        })
    },[])

   const setData = ({ name,
         login,
         followers, 
         following, 
         public_repos,
         avatar_url }) => {
        setName(name)
        setUserName(login)
        setFollowers(followers)
        setFollowing(following)
        setRepos(public_repos)
        setAvatar(avatar_url)
    }


    const handleSearch = (event) => {
        setUserInput(event.target.value)
    }

    const handleSubmit = () => {
        fetch(`https://api.github.com/users/${userInput}`)
        .then(res => res.json())
        .then(data => {
            setData(data)
        } )
    }

    return (
        <div>
            <ContainerCentral>
                <h1>Repositórios Github</h1>
            </ContainerCentral>

            <ContainerInput>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Input placeholder='Digite um nome' name='digite um nome' onChange={handleSearch}
                   size={500}
                   />
                    <Form.Button content='Pesquisar' />
                </Form.Group>
            </Form>

           
            </ContainerInput>

            <ContainerInfo>
            <Card>
                <Image 
                src={avatar}
                /> 


               <Card.Content>
                    <Card.Header>Nome: {name}</Card.Header> <br/>
                    <Card.Header>Username: {userName}</Card.Header> <br/>
                    <Card.Header>Seguidores: {followers}</Card.Header> <br/>
                    <Card.Header>Seguindo: {following}</Card.Header> <br/>
                    <Card.Header>Repositórios: {repos}</Card.Header>
                </Card.Content> 

             
            </Card> 
            </ContainerInfo>

            <Creditos>
                <p>Feito por <a href="https://github.com/camilagsoares" style={{ textDecoration: 'none' }}>Camila Goulart</a></p>
            </Creditos>
        </div>
    )
}

export default Home