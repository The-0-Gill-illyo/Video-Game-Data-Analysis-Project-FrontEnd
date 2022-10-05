
const Game = (props) => {
    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Game Rank</th>
                        <th>Name</th>
                        <th>Platform</th>
                        <th>Year</th>
                        <th>Genre</th>
                        <th>Publisher</th>
                        <th>North American Sales</th>
                        <th>Europe Sales</th>
                        <th>Japan Sales</th>
                        <th>Other Sales</th>
                        <th>Global Sales</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.parentEntries.game_rank}</td>
                        <td>{props.parentEntries.name}</td>
                        <td>{props.parentEntries.platform}</td>
                        <td>{props.parentEntries.year}</td>
                        <td>{props.parentEntries.genre}</td>
                        <td>{props.parentEntries.publisher}</td>
                        <td>{props.parentEntries.northamericasales}</td>
                        <td>{props.parentEntries.europesales}</td>
                        <td>{props.parentEntries.japansales}</td>
                        <td>{props.parentEntries.othersales}</td>
                        <td>{props.parentEntries.globalsales}</td>
                    </tr>
                </tbody>
            </table> 
        </div>
     );
}
 
export default Game;