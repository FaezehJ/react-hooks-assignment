import React, { useState } from "react";
import ScoreBoard from "./components/ScoreBoard"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.css"; 
import "./Styles/ScoreBoard.css";



function App() {
  const [players, setPlayers] = useState([]);

  const addPlayer = (name) => {
    const newPlayer = {
      id: Date.now(), // Better unique identifier using the current timestamp
      name: name,
      score: 0
    };
    setPlayers([...players, newPlayer]);
  };

  const deletePlayer = (playerId) => {
    setPlayers(players.filter(player => player.id !== playerId));
  };

  return (
    <div className="App">
      <ScoreBoard players={players} addPlayer={addPlayer} deletePlayer={deletePlayer} />
    </div>
  );
}

export default App;