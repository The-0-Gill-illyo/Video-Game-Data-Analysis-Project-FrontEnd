import {useState, useEffect} from 'react';
// import {Chart} from 'react-google-charts';

const RecordsGraph = (props) => {
    useEffect(() => {
        displayData()
    }, [])

    function displayData(){
        console.log("Videogame data:", props)


    }



    return ( 
        <h1>Graph Here</h1>

     );
}
 
export default RecordsGraph;