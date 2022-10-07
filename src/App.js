import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Search from './Components/Search/Search';
import RecordsGraph from './Components/RecordsGraph/RecordsGraph';
import CustomRespose from './Components/CustomResponse/customResonse';

function App() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchSearchResults()
  }, [])

  const fetchSearchResults = async () => {
    let response = await axios.get("http://localhost:8080/all")
    setGames(response.data);
  }

 

  return (
    <div>
      <RecordsGraph parentEntries={games}/>
      { <Search /> }
      <CustomRespose parentEntries={games}/>
    </div>
  );
}

export default App;
