import { useEffect } from "react"



const CustomRespose = (props) => {
   
    useEffect(() => {genreSales()
    },)
        function genreSales() {

            
            
            let genre = props.parentEntries.map(game =>{
                return game.genre 
            })
            console.log(genre)
            let saletype = [...new Set(genre)]
            console.log("What was the most popular genre in game sales over the years?",saletype)
           
            return (
                <div>

                </div>
            )
    }




}
 




export default CustomRespose;
