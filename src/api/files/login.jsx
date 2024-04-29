import React, { useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();
const CLIENT_ID = '3f964787b06a411ab5e89cbab59f6320';
const REDIRECT_URI = 'http://localhost:3000/callback'; // Change this to your redirect URI
const SCOPES = ['user-read-private', 'user-read-email']; // Add the scopes you need

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join('%20')}&response_type=token&show_dialog=true`;
    };

    // const handleCallback = () => {
    //     const hash = window.location.hash
    //         .substring(1)
    //         .split('&')
    //         .reduce((initial, item) => {
    //             if (item) {
    //                 const parts = item.split('=');
    //                 initial[parts[0]] = decodeURIComponent(parts[1]);
    //             }
    //             return initial;
    //         }, {});

    //     window.location.hash = '';

    //     const { access_token } = hash;

    //     if (access_token) {
    //         spotifyApi.setAccessToken(access_token);
    //         setLoggedIn(true);
    //     }
    // };

    return (
        <div>
            {!loggedIn ? (
                <button onClick={handleLogin}>Log in to Spotify</button>
            ) : (
                <h1>You are logged in!</h1>
            )}
        </div>
    );
};

export { Login };
