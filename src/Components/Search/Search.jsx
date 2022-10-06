import { useEffect, useState } from "react";



const Search = (props) => {
    const [searchGames, setSearchGames] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    useEffect(() => {

  console.log("Search Games")
    }, [])
    return ( 
    <div>
        <input type="text" className="searchTerm" placeholder='game search'></input>
        <button type="submit" className='searchBar'>
          <i className='fa-fa search'>Search</i> 
        </button>
    </div>
     );
}
 
export default Search;