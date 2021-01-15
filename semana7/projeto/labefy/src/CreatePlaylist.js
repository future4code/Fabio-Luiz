import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "./ApiParameters";

export class CreatePlaylist extends React.Component {
  state = {
    playlists: [],
    inputMusic: "",
    playlistName:"",
    playlistTracks: [],
    openDetails: false,
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  //   toggleDetails = () => {
  //       this.setState({openDetails: !this.state.openDetails})
  //   }

  handleInputMusic = (e) => {
    this.setState({ inputMusic: e.target.value });
  };

  getAllPlaylists = async () => {
    try {
      const res = await axios.get(baseUrl, axiosConfig);
      this.setState({ playlists: res.data.result.list });
    } catch (err) {
      console.log(err);
    }
  };

  createPlaylist = () => {
    let newArr = [...this.state.playlists];
    const Id = newArr.findIndex(
      (playlist) =>
        playlist.name.toLocaleLowerCase() ===
        this.state.inputMusic.toLocaleLowerCase()
    );
    if (Id > -1) {
      alert("Essa playlist já existe! Por favor, escolha outro nome.");
    } else {
      const body = {
        name: this.state.inputMusic,
      };
      axios
        .post(baseUrl, body, axiosConfig)
        .then(() => {
          this.getAllPlaylists();
          this.setState({ inputMusic: "" });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  deletePlaylist = (playlist) => {
    if (
      window.confirm(
        `Tem certeza que deseja excluir a playlist ${playlist.name}?`
      )
    ) {
      axios
        .delete(`${baseUrl}/${playlist.id}`, axiosConfig)
        .then(() => {
          this.getAllPlaylists();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  openPlaylist = async (playlist) => {
    this.setState({ openDetails: !this.state.openDetails });
    try {
      const res = await axios.get(`${baseUrl}/${playlist.id}/tracks`,axiosConfig);
      
      this.setState({ playlistTracks: res.data.result.tracks, playlistName: playlist.name });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { playlists, playlistTracks, openDetails, playlistName } = this.state;
    return (
      <div>
        <h1>Criar playlist</h1>
        <input type="text" onChange={this.handleInputMusic} />
        <button onClick={this.createPlaylist}>Criar</button>
        <div>
          <h2>Playlists</h2>
          {playlists.map((playlist) => {
            return (
              <div key={playlist.id}>
                <p>{playlist.name}</p>
                <button onClick={() => this.openPlaylist(playlist)}>
                  Detalhes
                </button>
                <button onClick={() => this.deletePlaylist(playlist)}>X</button>
              </div>
            );
          })}
        </div>
        <hr />
        <h2>Playlist {playlistName}</h2>
        {openDetails &&
          playlistTracks.map((track) => {
            return (
              <div key={track.id}>
                <p>Artista: {track.artist}</p>
                <p>Música: {track.name}</p>
                <audio controls="controls">
                  <source src={track.url} type="audio/mp3" />
                </audio>
                <hr />
                <div>
                  <h2>Criar track na Playlist</h2>
                  <div>
                    <label>Canção:</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Artista:</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Url do MP3:</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
