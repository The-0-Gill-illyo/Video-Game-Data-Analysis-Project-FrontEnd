import {Chart} from 'react-google-charts';

const consoleSales = (props) => {

    function PublisherDatatable(){

        let filterPubishers = props.parentEntries.filter(platform => platform.sales >= 2013)

        let platforms = filterPubishers.map(game => {
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
            ["Platform", "Sales(in millions)"],
            ...consoleArray
            ];
            return data;
    }
        return ( 
        <div>
            <h3>Global Sales for Each Video Game Console Since 2013</h3>
            <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={DataTable()}
            />
        </div>
        );
    }

export default consoleSales;