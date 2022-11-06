import { useState, useEffect } from 'react';

import SearchIcon from './search.svg'
import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=a46217e7';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchText = document.querySelector(".search input");
  searchText.addEventListener("change", ()=>{console.log(123);}
  );

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

  }

  useEffect(()=>{
    searchMovies('Super');
  },[]);

  return (
      <div className="app">
        <h1>Movie Search</h1>

        <div className="search">
          <input 
            value={searchTerm}
            placeholder="Search for movies"
          />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
        </div>
      </div>
  );
}
export default App;
