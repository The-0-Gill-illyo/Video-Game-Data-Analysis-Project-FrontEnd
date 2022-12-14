// import React from 'react';
import {Chart} from 'react-google-charts';

const GameSales = (props) => {

    let allGames = props.parentEntries

    function combineSameGames() {
        let names = allGames.map(game => {
          return game.name
        })
       
        let singleGames = [...new Set(names)]
        console.log("Names", singleGames)
      
      
      let nameArray = singleGames.map(name=> {
        let allNames = allGames.filter(game => game.name == name)
        console.log("AllNames",allNames)
        return [name]
      })

    const data = [
        
        ["Console", "Sales"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ];
      
    }
    return ( 
        <div>
            <h2>Copies Sold per Console</h2>
            <Chart
            chartType="PieChart"
            data={combineSameGames()}
            width={"100%"}
            height={"400px"}
            />
        </div>
     );
}
 
export default GameSales;