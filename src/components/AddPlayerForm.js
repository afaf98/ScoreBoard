import React from "react";

export default function AddPlayerForm() {
  return (
    <div>
      <div className="AddPlayerForm">
        <form>
          <label>
            Type the name of the player:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
