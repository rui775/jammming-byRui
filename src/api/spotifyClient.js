class SpotifyClient {
  constructor(dummyData, url) {
    if (!url) {
      this.dummyData = dummyData;
    }
  }
  /**
   *
   * @param {string} term
   */
  search(term) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let data;
        if (typeof this.dummyData === 'string') {
          data =  JSON.parse(this.dummyData);
        } else {
          data = this.dummyData;
        }
        
        const searchResults = data.filter((song) => {
          return (
            song.name
              .toLowerCase()
              .includes(term.toLowerCase()) ||
            song.artist
              .toLowerCase()
              .includes(term.toLowerCase()) ||
            song.album
              .toLowerCase()
              .includes(term.toLowerCase())
          );
        });
        resolve(searchResults);
      }, 3000);
    });
  }
}

export { SpotifyClient };
