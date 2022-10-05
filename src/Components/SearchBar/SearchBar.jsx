

const SearchBar = (game) => {
    let filteredGameSelection = game.filter(element => element.id == "game")
    return filteredGameSelection
}

export default SearchBar;