import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "./ApiParameters";

export class CreatePlaylist extends React.Component {
  state = {
    playlists: [],
    inputMusic: "",
    inputPlaylist: "",
    playlistName: "",
    playlistId: "",
    playlistTracks: [],
    openDetails: false,
    selectedPlaylistId: "",
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

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

  openPlaylist = async (id, name) => {
    this.setState({ openDetails: true });
    try {
      const res = await axios.get(`${baseUrl}/${id}/tracks`, axiosConfig);

      this.setState({
        playlistTracks: res.data.result.tracks,
        playlistName: name,
        playlistId: id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleNewTrackName = (e) => {
    this.setState({ newTrackName: e.target.value });
  };

  handleNewTrackArtist = (e) => {
    this.setState({ newTrackArtist: e.target.value });
  };

  handleNewTrackUrl = (e) => {
    this.setState({ newTrackUrl: e.target.value });
  };

  addTrackToPlaylist = () => {
    const {
      newTrackName,
      newTrackArtist,
      newTrackUrl,
      playlistId,
      playlistName,
    } = this.state;
    const body = {
      name: newTrackName,
      artist: newTrackArtist,
      url: newTrackUrl,
    };
    axios
      .post(`${baseUrl}/${this.state.playlistId}/tracks`, body, axiosConfig)
      .then((res) => {
        this.openPlaylist(playlistId, playlistName);
        this.setState({
          openDetails: false,
          newTrackName: "",
          newTrackArtist: "",
          newTrackUrl: "",
        });
        alert("Música adicionada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteTrack = (track) => {
    const { playlistId, playlistName } = this.state;
    if (
      window.confirm(`Tem certeza que deseja excluir a música ${track.name}?`)
    ) {
      axios
        .delete(
          `${baseUrl}/${this.state.playlistId}/tracks/${track.id}`,
          axiosConfig
        )
        .then((res) => {
          this.openPlaylist(playlistId, playlistName);
          alert("Música excluída com sucesso!");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  selectedPlaylist = (e) => {
    this.setState({ selectedPlaylistId: e.target.value });
  };

  addTrackToAnyPlaylist = () => {
    const {
      newTrackName,
      newTrackArtist,
      newTrackUrl,
      playlistId,
      playlistName,
    } = this.state;
    const body = {
      name: newTrackName,
      artist: newTrackArtist,
      url: newTrackUrl,
    };
    axios
      .post(`${baseUrl}/${this.state.selectedPlaylistId}/tracks`, body, axiosConfig)
      .then((res) => {
        // this.openPlaylist(playlistId, playlistName);
        this.setState({
          // openDetails: false,
          newTrackName: "",
          newTrackArtist: "",
          newTrackUrl: "",
        });
        alert("Música adicionada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const {
      playlists,
      playlistTracks,
      openDetails,
      playlistName,
      newTrackName,
      newTrackArtist,
      newTrackUrl,
    } = this.state;
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
                <button
                  onClick={() => this.openPlaylist(playlist.id, playlist.name)}
                >
                  Detalhes
                </button>
                <button onClick={() => this.deletePlaylist(playlist)}>X</button>
              </div>
            );
          })}
        </div>
        <hr />
        <h2>Playlist {playlistName}</h2>
        {/* <button onClick={this.toggleAddTrack}>Add Musica p/ playlist</button> */}
        {openDetails &&
          playlistTracks.map((track) => {
            return (
              <div key={track.id}>
                <p>Artista: {track.artist}</p>
                <p>Música: {track.name}</p>
                <audio controls="controls">
                  <source src={track.url} type="audio/mp3" />
                </audio>
                <button onClick={() => this.deleteTrack(track)}>Excluir</button>
                <hr />
              </div>
            );
          })}
        <div>
          <h2>Criar track na Playlist</h2>
          <div>
            <label>Canção:</label>
            <input
              type="text"
              value={newTrackName}
              onChange={this.handleNewTrackName}
            />
          </div>
          <div>
            <label>Artista:</label>
            <input
              type="text"
              value={newTrackArtist}
              onChange={this.handleNewTrackArtist}
            />
          </div>
          <div>
            <label>Url do MP3:</label>
            <input
              type="text"
              value={newTrackUrl}
              onChange={this.handleNewTrackUrl}
            />
          </div>
          <button onClick={this.addTrackToPlaylist}>Adicionar Música</button>
        </div>
        <hr />
        <div>
          <h2>Criar track</h2>
          <div>
            <label>Canção:</label>
            <input
              type="text"
              value={newTrackName}
              onChange={this.handleNewTrackName}
            />
          </div>
          <div>
            <label>Artista:</label>
            <input
              type="text"
              value={newTrackArtist}
              onChange={this.handleNewTrackArtist}
            />
          </div>
          <div>
            <label>Url do MP3:</label>
            <input
              type="text"
              value={newTrackUrl}
              onChange={this.handleNewTrackUrl}
            />
          </div>
          <div>
            <label>Playlist:</label>
            <select onChange={this.selectedPlaylist}>
              {this.state.playlists.map((playlist) => {
                return <option value={playlist.id}>{playlist.name}</option>;
              })}
            </select>
          </div>
          <button onClick={this.addTrackToAnyPlaylist}>Adicionar Música</button>
        </div>
      </div>
    );
  }
}
