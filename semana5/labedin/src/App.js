import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoCamila from '../src/foto.jpg';
import LogoLabenu from '../src/logo-labenu.png';
import LogoEscola from '../src/logo-escola.jpg';
import CardPequeno from './components/CardPequeno';
import LogoEmail from '../src/logo-email.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoCamila} 
          nome="Camila Goulart Soares" 
          descricao="Oi, eu sou a Camila. Tenho 21 anos, sou de Minas Gerais. Sou estudante do curso Web Full Stack da Labenu. Estou me dedicando todos os dias, e daqui 6 meses serei uma programadora. Tenho o objetivo de ter excelência no meu âmbito profissional."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <CardPequeno 
      
      imagem={LogoEmail}
          
        />
      <div className="page-section-container">
        <h2>Instuições de ensino</h2>
        <CardGrande 
          imagem={LogoLabenu} 
          nome="Labenu" 
          descricao="Cursando o curso integral da Labenu." 
        />
        
        <CardGrande 
          imagem={LogoEscola} 
          nome="Colégio Sucesso" 
          descricao="Ensino médio." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
