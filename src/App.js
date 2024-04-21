import React, { useState } from 'react';
import { Playlist, Results } from './components';
import SearchBar from './components/searchbar/searchBar';
import styles from './App.module.css';
import { useSearchSongs } from './api/useSearchSongs';

function App({ apiClient }) {
  const [playList, setPlayList] = useState([]);
  const {
    searchTerm,
    searchResults,
    setSearchTerm,
    handleSearch,
    isLoading,
  } = useSearchSongs({ apiClient });

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
          handleSearchSubmit={handleSearch}
          handleSearchTermInput={setSearchTerm}
        />
      </div>
      <div className={styles.container}>
        {isLoading ? (
          'Loading...'
        ) : (
          <Results
            searchResults={searchResults}
            addToPlaylist={addToPlaylist}
          />
        )}
        <Playlist
          playList={playList}
          addToPlaylist={addToPlaylist}
          removeFromPlaylist={removeFromPlaylist}
        />
      </div>
    </>
  );
}

export default App;
