import React from "react";
import styles from "./results.module.css";
import AddButton from "../../utils/buttonAdd";

const Results = () => {
    const songs = [
        { title: "Bohemian Rhapsody", artist: "Queen" },
        { title: "I Want to Break Free", artist: "Queen" },
        { title: "RAdio Ga Ga", artist: "Queen" },
        { title: "One", artist: "U2" },
        { title: "Light My Fire", artist: "Doors" },
        { title: "Numb", artist: "Linkin Park" },
    ];

    const playlist = [];

    const addToPlaylist = (song) => {
        playlist.push(song);
    };

    return (
        <div className={styles.results}>
            <h2>Results</h2>
            <ul className={styles.list}>
                {songs.map((song) => (
                    <li className={styles.entry} key={song.title}>
                        <div>
                            <span className={styles.title}>{song.title}</span> <em>by</em> <span className={styles.artist}>{song.artist}</span>
                        </div>
                        <AddButton onClick={() => addToPlaylist(song)} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Results;


