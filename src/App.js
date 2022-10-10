import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Search from './Components/Search/Search';
import RecordsGraph from './Components/RecordsGraph/RecordsGraph';
import CustomRespose from './Components/CustomResponse/CustomResonse';
import ConsoleSales from './Components/ConsoleSales/ConsoleSales';

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
      <CustomRespose parentEntries={games}/>
      <Search />
      {/* <ConsoleSales parentEntries={games}/> */}
    </div>
  );
}

export default App;
