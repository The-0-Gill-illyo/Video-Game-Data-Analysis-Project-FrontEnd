import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";



const Search = (props) => {
  const [searchGames, setSearchGames] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [videoGame, setVideoGame] = useState([])

  useEffect(() => {
  fetchSearchResults()
  }, [searchInput])

  function passedSearchTerms(searchTerm){
    setSearchInput(searchTerm)
  }
  const fetchSearchResults = async () => {
    let response = await axios.get("http://localhost:8080/all")
    console.log("GameResults:", response.data)
    setSearchGames(response.data)
    let filteredSearch = searchGames.filter(game => game.name.includes(searchInput));
    console.log(filteredSearch)
    setVideoGame(filteredSearch)
  }


      return ( 
        <div>
          <SearchBar searchGames={passedSearchTerms}/>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Platform</th>
                <th>Year</th>
                <th>Publisher</th>
              </tr>
            </thead>
            <tbody>
              {videoGame.map((game) => {
                return(
                  <tr>
                    <td>{game.name}</td>
                    <td>{game.platform}</td>
                    <td>{game.year}</td>
                    <td>{game.publisher}</td>
                  </tr>
                )
              })}
             
            </tbody>
          </table>
        </div>
        );
        
      }
      export default Search;
      