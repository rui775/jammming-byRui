import React from 'react';
import styles from './myPlayLists.module.css';

const MyPlayLists = ({ myPlayLists, toggleSongList, showSongList, removeFromMyPLyaLists }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.myPlaylistsTitle}>My Playlists</h1>
            <ul className={styles.myPlayLists}>
                {myPlayLists.map((playlist, index) => {
                    const isSongListVisible = showSongList[playlist.name];
                    return (
                        <li key={index}>
                            <div className={styles.playlistName} onClick={() => toggleSongList(playlist.name)}>
                                <h3 className={styles.nameOnMyPlaylists}>{playlist.name}</h3>
                                <div title='Show/Hide playlist'>
                                    <svg
                                        className={styles.icon}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512">
                                        <path d="M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <ul id='list' className={`${styles.songList} ${isSongListVisible ? styles.visible : ''}`}>
                                    {playlist.songs.map((song, songIndex) => (
                                        <li key={songIndex}>
                                            <div>
                                                <span className={styles.title}>{song.name}</span> <em>by</em> <span className={styles.artist}>{song.artist}</span>
                                            </div>
                                        </li>
                                    ))}
                                    <div title='Remove from my playlists'>
                                        <svg
                                            className={styles.icon}
                                            onClick={() => removeFromMyPLyaLists(playlist.name)}
                                            title='Remove from my playlists'
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512">
                                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
                                        </svg>
                                    </div>
                                </ul>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export { MyPlayLists };