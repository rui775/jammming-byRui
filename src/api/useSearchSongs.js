import { useState } from 'react';

const useSearchSongs = ({ apiClient }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    const searchTerm = e.target.search.value;
    e.preventDefault();

    if (searchTerm !== '') {
      setIsLoading(true);
      const apiSearchResults =
        await apiClient.search(searchTerm);
      setSearchResults(apiSearchResults);
      setIsLoading(false);
    }
  };

  return {
    searchResults,
    handleSearch,
    setSearchResults,
    isLoading,
  };
};

export { useSearchSongs };
