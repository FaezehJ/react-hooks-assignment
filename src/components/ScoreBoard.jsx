import React, { useRef, useState } from "react";
import Player from "../components/Player"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/App.css"; 
import "../Styles/ScoreBoard.css";


function ScoreBoard() {
  const [players, setPlayers] = useState([]);
  const playerNameRef = useRef(null);

  const handleAddPlayer = () => {
    const name = playerNameRef.current.value;
    if (name.trim() !== '') {
      const newPlayer = {
        id: Date.now(), // Unique ID for the key prop
        name: name,
        score: 0
      };
      setPlayers(prevPlayers => [...prevPlayers, newPlayer]);
      playerNameRef.current.value = ''; // Clear the input field
    }
  };

  const handleDeletePlayer = playerId => {
    setPlayers(prevPlayers => prevPlayers.filter(player => player.id !== playerId));
  };

  const handleScoreChange = (playerId, value) => {
    setPlayers(prevPlayers => prevPlayers.map(player => 
      player.id === playerId ? { ...player, score: player.score + value } : player
    ));
  };

  return (
    <div className="container">
      <div className="row text-center">
        <h1>Scoreboard</h1>
      </div>
      <div className="row">
        <div className="col-md-4 m-auto">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="New Player Name"
              aria-label="New Player Name"
              aria-describedby="button-add-player"
              ref={playerNameRef}
              required
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              id="button-add-player"
              onClick={handleAddPlayer}
            >
              Add Player
            </button>
          </div>
        </div>
      </div>
      <div className="row m-auto">
        {players.map(player => (
          <div className="col-md-4" key={player.id}>
            <Player
              name={player.name}
              score={player.score}
              onScoreChange={(value) => handleScoreChange(player.id, value)}
              onDelete={() => handleDeletePlayer(player.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScoreBoard;