import React, { useState } from 'react';
import songs from '../src/temp/songs.js';
import SearchBar from './components/searchbar/searchBar';
import Results from './components/results/results';
import Playlist from './components/playlist/playlist';
import styles from './App.module.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const [searchResults, setSearchResults] = useState([]);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm === '') {
      return;
    } else {
      const searchResults = songs.filter(song => {
        return song.name.toLowerCase().includes(searchTerm.toLowerCase()) || song.artist.toLowerCase().includes(searchTerm.toLowerCase()) || song.album.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(searchResults);
    }
    setSearchTerm('');
  };

  const [playList, setPlayList] = useState([]);
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
        <Results searchResults={searchResults} addToPlaylist={addToPlaylist} />
        <Playlist playList={playList} addToPlaylist={addToPlaylist} removeFromPlaylist={removeFromPlaylist} />
      </div>
    </>
  );
}

export default App;
