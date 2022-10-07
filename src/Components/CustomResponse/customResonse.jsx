import { useEffect } from "react"
import {Chart} from 'react-google-charts';


const CustomRespose = (props) => {
   
    useEffect(() => {genreSales()
    },)
        function genreSales() {

            let filteredGenres = props.parentEntries

            let genre = props.parentEntries.map(game =>{
                return game.genre 
            })
            console.log(genre)
            let saletype = [...new Set(genre)]
            console.log("What was the most popular genre in game sales over the years?",saletype)

            // let genreArray = saletype.map(game => {
            //     return game.genre

                

            // })
            let filteredGenre = saletype.map(genre => {
                let allGenres = filteredGenre.filter(game => game.genre == genre)
                // console.log("platform game arrays", allGamesForPlatform)
                allGenres.sum = function(items, game){
                        return items.reduce(function(a, b){
                            return a + b[game];
                        }, 0);
                    }
                let totalGenreGames = allGenres.sum(allGenres, 'globalsales')
                console.log("game sales", totalGenreGames)
    
    
                return [genre, totalGenreGames]

            console.log(genreArray)

            const genreSales = [
                ["Genre", "Sales"],
                ...genreArray
                
                ];

                return genreSales;


            }
            return (
                <div>
                <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={genreSales()}
                />
            </div>
            );




}
 




export default CustomRespose;
