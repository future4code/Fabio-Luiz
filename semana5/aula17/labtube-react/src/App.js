import homeIcon from './img/home_icon_selected.png'
import trendIcon from './img/trend_icon.png'
import subscribeIcon from './img/subscribes_icon.png'
import libraryIcon from './img/library_icon.png'
import historyIcon from './img/history_icon.png'
import './App.css';

function App() {
  const titulo = "Titulo do video"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }
  
  return (
    <div>
      <div className="tela-inteira">
        <header>
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical botao-inicio">
                      <img src={homeIcon}/><span>Início</span></li>
                    <li className="botoes-meunu-vertical botao-trend">
                      <img src={trendIcon}/><span>Em alta</span></li>
                    <li className="botoes-meunu-vertical">
                      <img src={subscribeIcon}/><span>Inscrições</span></li>
                    <hr />
                    <li className="botoes-meunu-vertical">
                      <img src={libraryIcon}/><span>Originais</span></li>
                    <li className="botoes-meunu-vertical">
                      <img src={historyIcon}/><span>Histórico</span></li>
                </ul>
            </nav>
            
            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Desenvolvido por <span>Fabio Dev</span></h4>
        </footer>
      </div>
    </div>
  );
}

export default App;
