import React from "react";
import Player from "./Player";

export default function ScoreBoard() {
  return (
    <div className="Scoreboard">
      <p>Player's scores:</p>
      <ul>
        <Player name="Violetta" />
        <Player name="Eszter" />
        <Player name="Jeroen v2" />
        <Player name="Lisa" />
      </ul>
    </div>
  );
}
