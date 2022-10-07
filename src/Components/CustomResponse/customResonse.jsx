import {Chart} from 'react-google-charts';


const CustomRespose = (props) => {
   
    let genreData = props.parentEntries

    function genreSales() {
        let genre = genreData.map(game =>{
            return game.genre 
        })
        let saletype = [...new Set(genre)]

        let genreArray = saletype.map(genre => {
            let allGenres = genreData.filter(game => game.genre == genre)
            allGenres.sum = function(items, game){
                    return items.reduce(function(a, b){
                        return a + b[game];
                    }, 0);
                }
            let totalGenreGames = allGenres.sum(allGenres, 'globalsales')
            return [genre, totalGenreGames]
        })
            console.log(genreArray)

        const data = [
            ["Genre", "Sales"],
            ...genreArray
            ];
            return data;
        }
        return (
            <div>
                <h3>Most Popular Video Game Genres based on Global Sales</h3>
                <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={genreSales()}
                />
        </div>
    )

}
 

export default CustomRespose;
