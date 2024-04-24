import React, { useRef, useState } from 'react';
import songs from '../src/temp/songs.js';
import { SearchBar, Results, Playlist, MyPlayLists } from './components/index.js';
import styles from './App.module.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playList, setPlayList] = useState([]);
  const [playListName, setPlayListName] = useState("");
  const [myPlayLists, setMyPlayLists] = useState([]);
  const [showSongList, setShowSongList] = useState({});
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm === '') {
      return;
    } else {
      const searchResults = songs.filter(song => {
        return song.name.toLowerCase().includes(searchTerm.toLowerCase())
          || song.artist.toLowerCase().includes(searchTerm.toLowerCase())
          || song.album.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(searchResults);
    }
    setSearchTerm('');
  };

  const addToPlaylist = (song) => {
    setPlayList((prev) => {
      if (prev.includes(song)) {
        return prev;
      } else {
        return [...prev, song];
      }
    });
  };
  const removeFromPlaylist = (song) => {
    setPlayList((prev) => {
      return prev.filter((item) => item.id !== song.id);
    });
  };

  const handlePlaylistName = (e) => {
    if (e.target.value.length > 0) {
      setPlayListName(e.target.value);
    }
  };

  const addToMyPlaylists = (name, playlist) => {
    if (playlist.length > 0) {
      setMyPlayLists(prevPlaylists => {
        if (prevPlaylists.find(item => item.name === name)) {
          return prevPlaylists;
        } else {
          return [...prevPlaylists, {
            name,
            songs: playlist
          }]
        }
      });
    }
  };

  const handlePlaylistSubmit = (e) => {
    e.preventDefault();
    if (playListName === "") {
      return;
    } else {
      addToMyPlaylists(playListName, playList);
    }
    inputRef.current.value = '';
  };

  const toggleSongList = (playlistName) => {
    setShowSongList({
      ...showSongList,
      [playlistName]: !showSongList[playlistName],
    });
  };

  const removeFromMyPLyaLists = (name) => {
    setMyPlayLists(prevPlaylists => {
      return prevPlaylists.filter((item) => item.name !== name);
    });
  };

  return (
    <>
      <div>
        <SearchBar
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          handleSearchSubmit={handleSearchSubmit}
        />
      </div>
      <div className={styles.container}>
        <Results
          searchResults={searchResults}
          addToPlaylist={addToPlaylist}
        />
        <Playlist playList={playList}
          addToPlaylist={addToPlaylist}
          removeFromPlaylist={removeFromPlaylist}
          handlePlaylistName={handlePlaylistName}
          handlePlaylistSubmit={handlePlaylistSubmit}
          inputRef={inputRef}
        />
      </div>
      <div>
        <MyPlayLists
          myPlayLists={myPlayLists}
          toggleSongList={toggleSongList}
          showSongList={showSongList}
          removeFromMyPLyaLists={removeFromMyPLyaLists}
        />
      </div>
    </>
  );
}

export default App;
