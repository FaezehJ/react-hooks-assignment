import React from "react";
import "../Styles/App.css"; 
import "../Styles/ScoreBoard.css";


function Player({ name, score, onScoreChange, onDelete }) {
  return (
    <div className="container-fluid border border-dark p-3 m-3">
      
      <div className="row justify-content-center">
  <div className="player-name text-center">{name}</div>
</div>
      <div className="row justify-content-center">
        <p className="text-center fs-3">{score}</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <button
            className="btn btn-outline-primary w-100"
            onClick={() => onScoreChange(1)}
          >
            Increment
          </button>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-outline-danger w-100"
            onClick={() => onScoreChange(-1)}
          >
            Decrement
          </button>
        </div>
        <div className="col-12 mt-2">
          <button onClick={onDelete} className="btn btn-danger w-100">
            Delete Player
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;