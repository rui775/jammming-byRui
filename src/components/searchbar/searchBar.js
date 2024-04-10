// generate a react component
import React from 'react';
// import ReactDOM from 'react-dom';
import styles from './searchbar.module.css';

export default function search() {
    return (
        <div className={styles.container}>
            <h1 className={styles.dance}>Jammming</h1>
            <form>
                <input className={styles.inputSearch} placeholder="Enter a song, album or artist" />
                <button className={styles.searchButton} type="submit">Search</button>
            </form>
        </div>
    );
}