import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import FotoUsuarioDois from '../src/foto-usuario1.jpg'
import FotoUsuarioTres from '../src/foto-usuario2.jpg'
import FotoFeedUm from '../src/foto-feed1.jpg'
import FotoFeedDois from '../src/foto-feed2.jpg'
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

<Post
          nomeUsuario={'mariasilva'}
          fotoUsuario={FotoUsuarioDois}
          fotoPost={FotoFeedUm}
        />

<Post
          nomeUsuario={'joaopaulo'}
          fotoUsuario={FotoUsuarioTres}
          fotoPost={FotoFeedDois}
        />
      </MainContainer>
    );
  }
}

export default App;
