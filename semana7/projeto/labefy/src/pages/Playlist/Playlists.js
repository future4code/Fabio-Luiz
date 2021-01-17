import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig, closeIcon } from "../../ApiParameters";
import {
  MainContainer,
  PlaylistsContainer,
  PlaylistBox,
  PlayListTracksBox,
  SessionTitle,
} from "../../Styled";
import { PlaylistTracks } from "./PlaylistTracks";

export class Playlists extends React.Component {
  state = {
    playlists: [],
    playlistTracks: [],
    playlistId: "",
    playlistName: "",
    openPlaylistTracks: false,
  };

  componentDidMount() {
    this.getAllPlaylists();
    this.setState({ openPlaylistTracks: false });
  }

  getAllPlaylists = async () => {
    try {
      const res = await axios.get(baseUrl, axiosConfig);
      this.setState({ playlists: res.data.result.list });
    } catch (err) {
      console.log(err);
    }
  };

  openPlaylist = async (id, name) => {
    this.setState({ openPlaylistTracks: true });
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

  togglePlaylistTracks = () => {
    this.setState({ openPlaylistTracks: !this.state.openPlaylistTracks });
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

  render() {
    return (
      <>
        <MainContainer id="box">
          <SessionTitle>Playlists</SessionTitle>
          <PlaylistsContainer>
            {this.state.playlists.map((playlist) => {
              let url = `https://source.unsplash.com/278x200/?${playlist.name}`;
              return (
                <PlaylistBox key={playlist.id}>
                  <div className="header">
                    <h3>{playlist.name}</h3>
                    <img
                      className="close-btn"
                      src={closeIcon}
                      onClick={() => this.deletePlaylist(playlist)}
                      alt=""
                    />
                  </div>

                  <img src={url} alt="" />

                  <button
                    className="btn add-button"
                    onClick={() =>
                      this.openPlaylist(playlist.id, playlist.name)
                    }
                  >
                    Abrir
                  </button>
                </PlaylistBox>
              );
            })}
          </PlaylistsContainer>
        </MainContainer>
        {this.state.openPlaylistTracks && (
          <PlayListTracksBox>
            <PlaylistTracks
              playlistTracks={this.state.playlistTracks}
              playlistName={this.state.playlistName}
              deleteTrack={this.deleteTrack}
              togglePlaylistTracks={this.togglePlaylistTracks}
            />
          </PlayListTracksBox>
        )}
      </>
    );
  }
}
