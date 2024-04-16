import React from "react";
import DeleteButton from "../../utils/buttonDel";
import styles from "./playlist.module.css";

const Playlist = () => {
    const songs = [
        { title: "Bohemian Rhapsody", artist: "Queen" },
        { title: "I Want to Break Free", artist: "Queen" },
        { title: "RAdio Ga Ga", artist: "Queen" },
        { title: "One", artist: "U2" },
        { title: "Light My Fire", artist: "Doors" },
        { title: "Numb", artist: "Linkin Park" },
    ];

    const playlist = [];

    const deleteFromPlaylist = (song) => {
        const index = playlist.indexOf(song);
        if (index > -1) {
            playlist.splice(index, 1);
        }
    };

    return (
        <div className={styles.playlist}>
            <ul className={styles.list}>
                {songs.map((song) => (
                    <li className={styles.entry} key={song.title}>
                        <div>
                            <span className={styles.title}>{song.title}</span> <em>by</em> <span className={styles.artist}>{song.artist}</span>
                        </div>
                        <DeleteButton onClick={() => deleteFromPlaylist(song)} />
                    </li>
                ))}
            </ul>
            <form className={styles.form}>
                <input className={styles.inputSearch} type="text" placeholder="Enter a playlist name" />
                <button className={styles.searchButton} type="submit">Save to Spotify</button>
            </form>
        </div>
    );
};

export default Playlist;
