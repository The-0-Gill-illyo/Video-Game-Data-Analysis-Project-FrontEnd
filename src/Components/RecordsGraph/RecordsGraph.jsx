import {Chart} from 'react-google-charts';

const RecordsGraph = (props) => {

    function DataTable(){

        let filterData = props.parentEntries.filter(game => game.year >= 2013)

        console.log(filterData)

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
            options={DataTable()}
            />
        </div>
        );
    
    }

export default RecordsGraph;