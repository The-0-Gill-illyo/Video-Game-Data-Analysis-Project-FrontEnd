import {Chart} from 'react-google-charts';

const RecordsGraph = (props) => {

    function DataTable(){

        let filterData = props.parentEntries.filter(game => game.year >= 2013)

        let platforms = filterData.map(game => {
            return game.platform
        });

        let originalPlatform = [...new Set(platforms)]


        let consoleArray = originalPlatform.map(platform => {
            let allGamesForPlatform = filterData.filter(game => game.platform == platform)
                allGamesForPlatform.sum = function(items, game){
                    return items.reduce(function(a, b){
                        return a + b[game];
                    }, 0);
                }
            let totalConsoleGames = allGamesForPlatform.sum(allGamesForPlatform, 'globalsales')

            return [platform, totalConsoleGames]
        })

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