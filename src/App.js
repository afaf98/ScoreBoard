import React from "react";
import "./App.css";
import AddPlayerForm from "./components/AddPlayerForm";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  return (
    <header className="App-header">
      <main>
        <ScoreBoard />
        <AddPlayerForm />{" "}
      </main>
    </header>
  );
}

export default App;
