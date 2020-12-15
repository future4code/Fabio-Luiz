import homeIcon from './img/home_icon_selected.png'
import trendIcon from './img/trend_icon.png'
import subscribeIcon from './img/subscribes_icon.png'
import libraryIcon from './img/library_icon.png'
import historyIcon from './img/history_icon.png'
import labTubeLogo from './img/labtube_logo.png'
import searchLogo from './img/search_icon.png'
import './App.css';

function App() {
  const titulo = "Título do video"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }
  
  return (
    <div>
      <div className="tela-inteira">
        <header>
            <img src={labTubeLogo} alt="LabTube logo"/>
            <div className="search-box">
              <input type="text" placeholder="Busca" id="campoDeBusca" />
              <img src={searchLogo} />
            </div>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical botao-inicio">
                      <img src={homeIcon} alt="Início" /><span>Início</span></li>
                    <li className="botoes-meunu-vertical botao-trend">
                      <img src={trendIcon} alt="Em Alta" /><span>Em alta</span></li>
                    <li className="botoes-meunu-vertical">
                      <img src={subscribeIcon} alt="Inscrições" /><span>Inscrições</span></li>
                    <hr />
                    <li className="botoes-meunu-vertical">
                      <img src={libraryIcon} alt="Originais" /><span>Originais</span></li>
                    <li className="botoes-meunu-vertical">
                      <img src={historyIcon} alt="Histórico" /><span>Histórico</span></li>
                </ul>
            </nav>
            
            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <div>
                      <div className="videoUser">
                        <img src="https://source.unsplash.com/random/?guy" alt="" />
                      </div>
                      <h4>{titulo}</h4>
                    </div>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <div>
                      <div className="videoUser">
                        <img src="https://source.unsplash.com/random/?guy1" alt="" />
                      </div>
                      <h4>{titulo}</h4>
                    </div>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <div>
                      <div className="videoUser">
                        <img src="https://source.unsplash.com/random/?guy2" alt="" />
                      </div>
                      <h4>{titulo}</h4>
                    </div>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <div>
                      <div className="videoUser">
                        <img src="https://source.unsplash.com/random/?guy3" alt="" />
                      </div>
                      <h4>{titulo}</h4>
                    </div>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <div>
                      <div className="videoUser">
                        <img src="https://source.unsplash.com/random/?guy4" alt="" />
                      </div>
                      <h4>{titulo}</h4>
                    </div>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <div>
                      <div className="videoUser">
                        <img src="https://source.unsplash.com/random/?guy5" alt="" />
                      </div>
                      <h4>{titulo}</h4>
                    </div>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <div>
                      <div className="videoUser">
                        <img src="https://source.unsplash.com/random/?guy6" alt="" />
                      </div>
                      <h4>{titulo}</h4>
                    </div>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <div>
                      <div className="videoUser">
                        <img src="https://source.unsplash.com/random/?guy" alt="" />
                      </div>
                      <h4>{titulo}</h4>
                    </div>
                </div>
            </section>
        </main>
      </div>
    </div>
  );
}

export default App;
