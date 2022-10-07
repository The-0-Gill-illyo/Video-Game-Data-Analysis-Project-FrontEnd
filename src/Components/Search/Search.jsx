import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import Game from "../Game/Game";



const Search = () => {
  const [searchGames, setSearchGames] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [videoGame, setVideoGame] = useState([])
  const [games, setGames] = useState([]);

  useEffect(() => {
  fetchSearchResults()
  },)

  function passedSearchTerms(event){
   event.preventDefault(); 
    setSearchInput(searchInput)
  }
  const fetchSearchResults = async () => {
    let response = await axios.get("http://localhost:8080/all")
    console.log("GameResults:", response.data)
    setSearchGames(response.data)
    let filteredSearch = searchGames.filter(game => game.name.includes(searchInput));
    console.log(filteredSearch)
    setVideoGame(filteredSearch)
  }


  // async function getGameById(id){
  //   let response = await axios.get(`http://localhost:8080/getById/${id}`);
  //   setGames(response.data);
  //   console.log(response.data)
  // }

      return ( 
        <div>
          <SearchBar searchGames={passedSearchTerms}/>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Game Rank</th>
                <th>Platform</th>
                <th>Year</th>
                <th>Genre</th>
                <th>Publisher</th>
                <th>North American Sales</th>
                <th>Europe Sales</th>
                <th>Japan Sales</th>
                <th>Other Sales</th>
                <th>Global Sales</th>
              {/* { <button type="more" className="btn btn-primary" onClick={ () => {<Game parentEntries={games}/>}}>See More</button> } */}
              </tr>
            </thead>
            <tbody>
              {videoGame.map((game, index) => {
                return(
                  <tr key={index}>
                    <td>{game.name}</td>
                    <td>{game.game_rank}</td>
                    <td>{game.platform}</td>
                    <td>{game.year}</td>
                    <td>{game.genre}</td>
                    <td>{game.publisher}</td>
                    <td>{game.northamericasales}</td>
                    <td>{game.europesales}</td>
                    <td>{game.japansales}</td>
                    <td>{game.othersales}</td>
                    <td>{game.globalsales}</td>
                  </tr>
                )
              })}
             
            </tbody>
          </table>
        </div>
        );
        
      }
      export default Search;
      