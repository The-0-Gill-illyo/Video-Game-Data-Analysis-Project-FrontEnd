import React, {useEffect, useState} from 'react';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{

    },[])

    function handleSubmit(event){
        event.preventDefault();
        props.searchGames(searchTerm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className="searchTerm" placeholder='game search' 
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}></input>
                <button type="submit" className='searchBar'>
                <i className='fa-fa search'>Search</i> 
                </button>
            </form>
        </div>
    )
}

export default SearchBar;


