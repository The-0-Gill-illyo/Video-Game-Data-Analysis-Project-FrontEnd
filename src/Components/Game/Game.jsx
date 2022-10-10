import { useState } from "react";

const Game = (props) => {
  const [showMore, setShowMore] = useState(true);

  return (
    <div>
      {showMore ? (
        <div>
          <button onClick={() => setShowMore(!showMore)}>See More</button>
        </div>
      ) : (
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
          <button onClick={() => setShowMore(!showMore)}>Show Less</button>
        </table>
      )}
    </div>
  );
};

export default Game;
