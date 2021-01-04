import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Biroliro'}
          fotoUsuario={'https://static.poder360.com.br/2020/12/bolsonaro-risada-868x644.jpg'}
          fotoPost={'https://picsum.photos/200/150?a'}
        />

        <Post
          nomeUsuario={'Bilula'}
          fotoUsuario={'https://veja.abril.com.br/wp-content/uploads/2017/10/brasil-ex-presidente-lula-20171009-002.jpg'}
          fotoPost={'https://picsum.photos/200/150?b'}
        />

        <Post
          nomeUsuario={'Otário de Carvalho'}
          fotoUsuario={'https://www.rbsdirect.com.br/imagesrc/24819237.jpg'}
          fotoPost={'https://picsum.photos/200/150?c'}
        />
      </div>
    );
  }
}

export default App;
