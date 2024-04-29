import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();
const clientId = '3f964787b06a411ab5e89cbab59f6320';
const clientSecret = '10f96d27c46a42bb841fc926682747cb';

// Retrieve an access token
async function getAccessToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await response.json();
    return data.access_token;
}

// Set access token
async function setAccessToken() {
    const token = await getAccessToken();
    spotifyApi.setAccessToken(token);
}

// Get tracks
async function searchTracks(query) {
    await setAccessToken();
    const response = await spotifyApi.searchTracks(query);
    return response.tracks.items;
}

export { searchTracks };
