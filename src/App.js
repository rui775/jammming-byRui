import SearchBar from './components/searchbar/searchBar';
import Results from './components/results/results';
import Playlist from './components/playlist/playlist';
import styles from './App.module.css';

function App() {
  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div className={styles.container}>
        <Results />
        <Playlist />
      </div>
    </>
  );
}

export default App;
