import {Chart} from 'react-google-charts';

const RecordsGraph = (props) => {

    function DataTable(){

        let filterData = props.parentEntries.filter(game => game.year >= 2013)

        // console.log("Filtered Data", filterData)

        let platforms = filterData.map(game => {
            return game.platform
        });
        // console.log("Platform Data", platforms)

        let originalPlatform = [...new Set(platforms)]

        // console.log("original platform", originalPlatform)

        let consoleArray = originalPlatform.map(platform => {
            let allGamesForPlatform = filterData.filter(game => game.platform == platform)
            // console.log("platform game arrays", allGamesForPlatform)
                allGamesForPlatform.sum = function(items, game){
                    return items.reduce(function(a, b){
                        return a + b[game];
                    }, 0);
                }
            let totalConsoleGames = allGamesForPlatform.sum(allGamesForPlatform, 'globalsales')
            console.log("game sales", totalConsoleGames)


            return [platform, totalConsoleGames]
        })
            console.log(consoleArray)

        const data = [
            ["Platform", "Sales"],
            ...consoleArray
            
            ];

            return data;
    }
        






        return ( 
        <div>
            <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={DataTable()}
            />
        </div>
        );
    
    }

export default RecordsGraph;