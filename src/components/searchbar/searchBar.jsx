import styles from './searchbar.module.css';

export default function SearchBar({ searchTerm, handleSearch, handleSearchSubmit }) {

    return (
        <div className={styles.container}>
            <h1 className={styles.dance}>Jammming</h1>
            <form>
                <input
                    className={styles.inputSearch}
                    type="text"
                    placeholder="Enter a song, album or artist"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button
                    className={styles.searchButton}
                    type="submit"
                    onClick={handleSearchSubmit}
                >
                    Search
                </button>
            </form>
        </div>
    );
}
