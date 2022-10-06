import {Chart} from 'react-google-charts';

const RecordsGraph = (props) => {

    function DataTable(){

        let filterData = props.parentEntries.filter(game => game.year >= 2013)

        console.log("Filtered Data", filterData)

        let platforms = filterData.map(game => {
            return game.platform
        });
        console.log("Platform Data", platforms)

        let originalPlatfrom = [...new Set(platforms)]
        console.log(originalPlatfrom)

        let consoleArray = originalPlatfrom.map(platform =>{
            let TotalConsoleGames = filterData.filter(game => game.platform == platform)
        })
            console.log(consoleArray)

        const data = [
            ["Platform", "Sales"],
            ["2014", 1000],
            ["2015", 1170],
            ["2016", 660],
            ["2017", 1030],
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