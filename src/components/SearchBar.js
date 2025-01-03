import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ pokemon, setFilteredPokemon }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    if (!pokemon || pokemon.length === 0) {
      setFilteredPokemon([]); // Show an empty list if no Pokémon are available
      return;
    }

    if (!query) {
      setFilteredPokemon(pokemon); // Reset to show all Pokémon if search is cleared
      return;
    }

    const filtered = pokemon.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPokemon(filtered);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Pokémon..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
