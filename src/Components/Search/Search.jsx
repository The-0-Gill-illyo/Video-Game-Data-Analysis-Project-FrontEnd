import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import Game from "../Game/Game";


const Search = () => {
  const [searchGames, setSearchGames] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [videoGame, setVideoGame] = useState([])
  const [games, setGames] = useState([]);
  const [sameGames, setSameGames] = useState([])

  useEffect(() => {
  fetchSearchResults()
  // combineSameGames()
  }, [searchInput])

  // useEffect (() =>{
  //   setShowMore()
  // }, [showMore])

  function passedSearchTerms(searchTerm){
    setSearchInput(searchTerm)
  }
  const fetchSearchResults = async () => {
    let response = await axios.get("http://localhost:8080/all")
    setSearchGames(response.data)
    let filteredSearch = searchGames.filter(game => game.name.includes(searchInput));
    setVideoGame(filteredSearch)
    console.log("Games", videoGame)
  }

  

      return ( 
        <div>
          <SearchBar searchGames={passedSearchTerms}/>
          {videoGame.map((game, index) => {
                return(
                  <div key={index}>
                    <h3>{game.name}</h3>
                    <Game parentEntries = {game}/>
                  </div>
                )
              })}
        </div>
        );
        
      }
      export default Search;
      