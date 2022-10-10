import React from 'react';
import {Chart} from 'react-google-charts';

const GameSales = () => {

    const data = [
        
        ["Console", "Sales"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ];
      

    return ( 
        <div>
            <h2>Copies Sold per Console</h2>
            <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
            />
        </div>
     );
}
 
export default GameSales;