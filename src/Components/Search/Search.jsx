import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";



const Search = (props) => {
  const [searchGames, setSearchGames] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
  console.log("response", searchInput)
  fetchSearchResults()
  console.log("Search Games")
  }, [searchInput])

  function passedSearchTerms(searchTerm){
    
    setSearchInput(searchTerm)
  }
  const fetchSearchResults = async () => {
    let response = await axios.get("http://localhost:8080/all")
    console.log("GameResults:", response.data)
    setSearchGames(response.data.items)
    
    let filteredSearch = searchGames.filter(selectGame = selectGame.name);
    return filteredSearch
    
  }
      return ( 
        <SearchBar searchGames={passedSearchTerms}/>
        
        );
        
      }
      export default Search;
      
      
      // let filteredGameSelection = game.filter(element => element.id == "game")
      // const [searchResulst, SetSearchResults] = useState([]);
      // useEffect(() => {
      //   function searchByName(searchInput) {
      //     return searchGames.name = searchInput
      //   }
      //   },[])