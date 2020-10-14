import React, { useState } from "react";
import Player from "./Player";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}
function compare_name(player_a, player_b) {
  if (player_a < player_b) {
    return -1;
  }
  if (player_a < player_b) {
    return 1;
  }
  return 0;
}

export default function ScoreBoard() {
  //Creating and state array players
  const [players, set_players] = useState([
    { id: 1, name: "Violetta", score: 11 },
    { id: 2, name: "Eszetr", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const players_sortedByName = [...players].sort(compare_name);

  const [sort_by, set_sort_by] = useState("score");

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };
  const variable = sort_by === "name" ? compare_name : compare_score;
  console.log(variable);
  const players_sorted = [...players].sort(variable);
  return (
    <div className="Scoreboard">
      <h1>ScoreBoard </h1>
      <h2>Players's scores : </h2>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <ul>
        {players_sorted.map((player) => {
          return (
            <Player key={player.id} name={player.name} score={player.score} />
          );
        })}
      </ul>
    </div>
  );
}
