import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";



const Search = (props) => {
  const [searchGames, setSearchGames] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
  
  console.log("Search Games")
  }, [])
  return ( 
    <SearchBar />
    );
  }
  
  export default Search;
  

// let filteredGameSelection = game.filter(element => element.id == "game")