import Player from "./Player";

export default function Players({ players, handleSelectedPlayers }) {
  return (
    <div className="mt-7 grid grid-cols-3 gap-5">
      {players.map((player) => (
        <Player
          key={player.playerId}
          player={player}
          handleSelectedPlayers={handleSelectedPlayers}
        />
      ))}
    </div>
  );
}
