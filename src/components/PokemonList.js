import React, { useState, useEffect, useCallback, Suspense } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { fetchPokemonDetails } from './utils';
import './PokemonList.css';

const SearchBar = React.lazy(() => import('./SearchBar'));
const Loader = React.lazy(() => import('./Loader'));
const Error = React.lazy(() => import('./Error'));

function PokemonList() {
  const [pokemon, setPokemon] = useState([]); // Full list of Pokémon
  const [filteredPokemon, setFilteredPokemon] = useState([]); // Filtered Pokémon list for search
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchPokemon = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
      const details = await Promise.all(data.results.map((p) => fetchPokemonDetails(p.url)));

      // Deduplicate by checking both the full list and filtered list
      const newPokemon = details.filter(
        (p) => !pokemon.some((prevP) => prevP.name === p.name)
      );

      setPokemon((prev) => [...prev, ...newPokemon]);

      // Deduplicate the filteredPokemon list
      setFilteredPokemon((prev) => [
        ...prev.filter((item) => !newPokemon.some((newP) => newP.name === item.name)),
        ...newPokemon,
      ]);

      setHasMore(!!data.next);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [offset, pokemon]);

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight - 100 &&
        hasMore &&
        !loading
      ) {
        setOffset((prev) => prev + 20);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, loading]);

  return (
    <div className="pokemon-container">
      <Suspense fallback={<Loader />}>
        <SearchBar pokemon={pokemon} setFilteredPokemon={setFilteredPokemon} />
      </Suspense>
      <div className="pokemon-list">
        {filteredPokemon.map((p) => (
          <Link key={p.name} to={`/pokemon/${p.name}`} className="pokemon-link">
            <div className="pokemon-item" style={{ backgroundColor: p.color }}>
              <img src={p.imageUrl} alt={p.name} className="pokemon-image" />
              <div className="pokemon-name">{p.name}</div>
            </div>
          </Link>
        ))}
      </div>
      <Suspense fallback={<Loader />}>
        {loading ? <Loader /> : error ? <Error message={error} /> : null}
      </Suspense>
    </div>
  );
}

export default PokemonList;
