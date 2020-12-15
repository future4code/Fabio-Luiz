import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import NavItem from './components/NavItem/NavItem';
import MyBox from './components/MyBox/MyBox';
import MinhaFoto from './img/foto1.jpg'
import Hab1 from './img/hab-1.jpg'
import Hab2 from './img/hab-2.jpg'
import Hab3 from './img/hab-3.jpg'
import Hab4 from './img/hab-4.jpg'


function App() {
  return (
    <div className="App">

      <header>
        <p>Fabio<span>Dev</span></p>
        <nav>
          <ul>
            <a href="#"><NavItem 
              icone="https://www.flaticon.com/svg/static/icons/svg/25/25694.svg" 
              item="Home"
            /></a>
            <a href="#experiencias"><NavItem 
              icone="https://www.flaticon.com/svg/static/icons/svg/2910/2910791.svg" 
              item="Experiências"
            /></a>
            <a href="#redes-sociais"><NavItem 
              icone="https://www.flaticon.com/premium-icon/icons/svg/3252/3252623.svg" 
              item="Mídias"
            /></a>
          </ul>
        </nav>
      </header>

      <div className="main-section">
      <h2>Dados pessoais</h2>
        <div className="page-section-container">
          <CardGrande 
            imagem={MinhaFoto}
            nome="Fabio dos Santos" 
            descricao="Oi, eu sou o Fabio. Sou estudante da Labenu. Gosto muito dos desafios e projetos semanais. Me forçam a aprender cada vez mais."
          />

          <div className="info">
            <CardPequeno 
              titulo="Email: "
              icone="https://assets.stickpng.com/images/584856bce0bb315b0f7675ad.png"
              texto="22fsantos@gmail.com"
            />

            <CardPequeno 
              titulo="Endereço: "
              icone="https://www.flaticon.com/svg/static/icons/svg/1104/1104720.svg"
              texto="Minha casa - Rio de Janeiro/RJ"
            />
          </div>
          
          <ImagemButton 
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
            texto="Ver mais"
          />
        </div>

        <div className="page-section-container">
          <h2 id="experiencias">Histórico acadêmico</h2>
          <CardGrande 
            imagem="https://logodownload.org/wp-content/uploads/2015/02/ufrj-logo-13.png" 
            nome="UFRJ" 
            descricao="Formado em engenharia química. (Março/2018)" 
          />
          
          <CardGrande 
            imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0f1225c2d474a92656df_fav2_LabeNu_.png" 
            nome="Labenu" 
            descricao="Formando em desenvolvimento web fullstack" 
          />
        </div>

        <div className="page-section-container">
          <h2 id="soft-skills">Soft Skills</h2>
          <div className="habilidades">
            <MyBox 
                titulo="Raciocínio lógico"
                icone={Hab1}
                texto="Capacidade de entender facilmente a lógica das estruturas de código."
              />
              <MyBox 
                titulo="Criatividade"
                icone={Hab2}
                texto="Capacidade de encontrar diferentes soluções para os problemas."
              />
              <MyBox 
                titulo="Quick learning"
                icone={Hab3}
                texto="Grande rapidez para aprender e assimilar novos conceitos."
              />
              <MyBox 
                titulo="Comunicador"
                icone={Hab4}
                texto="Facilidade em articular ideias e ser compreendido."
              />
          </div>
        </div>
        
        <div className="page-section-container">
          <h2 id="redes-sociais">Minhas redes sociais</h2>
          <div className="footer">
            <a href="http://www.facebook.com" target="_blank"><ImagemButton 
              imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
              texto="Facebook" 
            /></a>   

            <a href="http://www.twitter.com" target="_blank"><ImagemButton 
              imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
              texto="Twitter" 
            /></a>

            <a href="http://www.instagram.com" target="_blank"><ImagemButton 
              imagem="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" 
              texto="Instagram" 
            /></a>     
          </div>     
        </div>
      </div>
    </div>
  );
}

export default App;
