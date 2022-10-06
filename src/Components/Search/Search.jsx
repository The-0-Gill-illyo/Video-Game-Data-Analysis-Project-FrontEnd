import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";



const Search = (props) => {
  const [searchGames, setSearchGames] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
  console.log("response", searchInput)

  console.log("Search Games")
  }, [searchInput])

  function passedSearchTerms(searchTerm){
    
    setSearchInput(searchTerm)
  }


  // const fetchSearchResults = async () => {
  //   let response = await axios.get("http://localhost:8080/all")
  //   console.log("GameResults:" response)
  //   setSearchGames(response.data.items)
  // }


  return ( 
    <SearchBar searchGames={passedSearchTerms}/>
    
    );
  }
  
  export default Search;
  

// let filteredGameSelection = game.filter(element => element.id == "game")