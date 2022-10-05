import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    getGameById();
  }, [])

  async function getGameById(){
    let response = await axios.get("http://localhost:8080/getById/10");
    setGames(response.data);
    console.log(response.data)
  }
 

  return (
    <div>
      <input type="text" className="searchTerm" placeholder='game search'></input>
      <button type="submit" className='searchBar'>
        <i className='fa-fa search'>Search</i> 
      </button>
    </div>
  );
}

export default App;
