import {Chart} from 'react-google-charts';

const RecordsGraph = (props) => {

    function DataTable(){

        let filterData = props.filter(game => game.year >= 2013)

        console.log(filterData)

        const data = [
            ["Platform", "Sales"],
            ["2014", 1000, 400, 200],
            ["2015", 1170, 460, 250],
            ["2016", 660, 1120, 300],
            ["2017", 1030, 540, 350],
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