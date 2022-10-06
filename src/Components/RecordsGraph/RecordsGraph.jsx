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
            let totalConsoleGames = filterData.filter(game => game.platform == platform)
            for(totalConsoleGames === filterData){

            }
        })
            console.log(consoleArray)

        const data = [
            ["Platform", "Sales"],
                ["PS3", 1000],
                ["X360", 1170],
                ["PS4", 660],
                ["3DS", 1030],
                ["XOne", 1030],
                ["WIIU", 1030],
                ["WII", 1030],
                ["PC", 1030],
                ["PSV", 1030],
                ["DS", 1030],
                ["PSP", 1030],
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