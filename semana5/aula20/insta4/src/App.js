import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
      {
        user: 'Biroliro',
        fotoUser: 'https://static.poder360.com.br/2020/12/bolsonaro-risada-868x644.jpg',
        fotoPost: 'https://picsum.photos/200/150?a'
      },
      {
        user: 'Bilula',
        fotoUser: 'https://veja.abril.com.br/wp-content/uploads/2017/10/brasil-ex-presidente-lula-20171009-002.jpg',
        fotoPost: 'https://picsum.photos/200/150?b'
      },
      {
        user: 'Otário de Carvalho',
        fotoUser: 'https://www.rbsdirect.com.br/imagesrc/24819237.jpg',
        fotoPost: 'https://picsum.photos/200/150?c'
      }
    ]
  }

  render() {
    return (
      <div className={'app-container'}>
        {this.state.posts.map((post) => {
          return (
            <Post
              nomeUsuario={post.user}
              fotoUsuario={post.fotoUser}
              fotoPost={post.fotoPost}
            />
          )
        })}
      </div>
    );
  }
}

export default App;
