// Callback.js
import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

const Callback = () => {
    useEffect(() => {
        const handleCallback = () => {
            const hash = window.location.hash
                .substring(1)
                .split('&')
                .reduce((initial, item) => {
                    if (item) {
                        const parts = item.split('=');
                        initial[parts[0]] = decodeURIComponent(parts[1]);
                    }
                    return initial;
                }, {});

            window.location.hash = '';

            const { access_token } = hash;

            if (access_token) {
                spotifyApi.setAccessToken(access_token);
                // You can store the token in localStorage or Redux or any state management solution you use
                localStorage.setItem('spotifyAccessToken', access_token);
                window.opener.spotifyCallback();
                window.close();
            }
        };

        handleCallback();
    }, []);

    return <div></div>;
};

export { Callback };
