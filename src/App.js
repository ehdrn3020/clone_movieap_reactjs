import { useState, useEffect } from 'react';

import MovieCard from './MovieCard'
import SearchIcon from './search.svg'
import './App.css';

const API_URL = 'https://www.omdbapi.com?apikey=a46217e7';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("spider");
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    searchMovies(searchTerm);
  },[]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  }

  return (
      <div className="app">
        <h1>Movie Search</h1>
        <div className="search">
          <input 
            defaultValue={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); } }
            placeholder="Search for movies"
          />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
        </div>

        { movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie)=>(
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
  );
}
export default App;
