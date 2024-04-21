import styles from './searchbar.module.css';

export default function SearchBar({ handleSearchSubmit }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.dance}>Jammming</h1>
            <form onSubmit={handleSearchSubmit}>
                <input
                    className={styles.inputSearch}
                    type="text"
                    name="search"
                    placeholder="Enter a song, album or artist"
                />
                <button
                    className={styles.searchButton}
                    type="submit"
                >
                    Search
                </button>
            </form>
        </div>
    );
}
