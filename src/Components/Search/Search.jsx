import { useEffect, useState } from "react";



const Search = (props) => {
    const [searchGames, setSearchGames] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    useEffect(() => {

  console.log("Search Games")
    }, [])
    return ( 

     );
}
 
export default Search;


// let filteredGameSelection = game.filter(element => element.id == "game")