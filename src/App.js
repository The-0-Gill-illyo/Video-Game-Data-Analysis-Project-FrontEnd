import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Game from './Components/Game/Game';
import Search from './Components/Search/Search';

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
      <Search />
      <Game parentEntries={games}/>
    </div>
  );
}

export default App;
