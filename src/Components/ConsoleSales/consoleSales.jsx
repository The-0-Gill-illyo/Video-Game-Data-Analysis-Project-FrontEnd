import {Chart} from 'react-google-charts';






const ConsoleSales = (props) => {

    function publisherDataTable(){

        let filterData = props.parentEntries.filter(platform => platform.year >= 2013)
        console.log(filterData)

        let platforms = filterData.map(game => {
            return game.platform
        });
        let originalPlatform = [...new Set(platforms)]


        // let publishers = filterPublishers.map(game => {
        //     return game.platform
        // });
        // let originalPublishers = [...new Set(publishers)]


        let consoleArray = originalPlatform.map(platform => {
            let allGamesForPlatform = filterData.filter(game => game.platform == platform)
        console.log("Console Array", consoleArray)


          
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
            data={publisherDataTable()}
            />
        </div>
        );
    }

export default ConsoleSales;