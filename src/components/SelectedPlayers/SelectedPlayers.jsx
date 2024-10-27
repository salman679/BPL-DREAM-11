import React from "react";

function SelectedPlayers({ selectedPlayer, handleRemoveSelected }) {
  return (
    <div className="flex justify-between items-center p-5 border rounded-xl">
      <div className="flex gap-5 items-center">
        <div className="w-16 h-16">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={selectedPlayer.image}
            alt="Rectangle"
          />
        </div>

        <div>
          <h6 className="font-semibold text-xl">{selectedPlayer.name}</h6>
          <span className="text-base text-gray-500">
            {selectedPlayer.battingType}
          </span>
        </div>
      </div>
      <button onClick={() => handleRemoveSelected(selectedPlayer.playerId)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 20 20"
          className="text-red-400"
        >
          <g fill="currentColor">
            <path d="M2 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Z" />
            <path
              fillRule="evenodd"
              d="M2 7.5h16l-.811 7.71a2 2 0 0 1-1.99 1.79H4.802a2 2 0 0 1-1.99-1.79L2 7.5Zm5.22 1.72a.75.75 0 0 1 1.06 0L10 10.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L11.06 12l1.72 1.72a.75.75 0 1 1-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 0 1-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}

SelectedPlayers.propTypes = {};

export default SelectedPlayers;
