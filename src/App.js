import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Game from './Components/Game/Game';
import Search from './Components/Search/Search';

function App() {

  const [games, setGames] = useState([]);

  useEffect(() => {
  }, [])

  
 

  return (
    <div>
      <Search />
      
    </div>
  );
}

export default App;
