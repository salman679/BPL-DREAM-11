export default function Player({ player, handleSelectedPlayers }) {
  return (
    <div className="p-5 border rounded-xl">
      <div className="w-full h-60">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={player.image}
          alt={player.name}
        />
      </div>
      <div className="mt-5">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
            />
          </svg>
          <span className="text-base font-semibold">{player.name}</span>
        </div>
        <div className="flex justify-between text-center my-3">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 50 50"
              className="text-gray-500"
            >
              <path
                fill="currentColor"
                d="M11.462 1C10.099 1 9 2.127 9 3.526v42.946c0 1.262 1.231 2.527 2.462 2.527c1.23 0 2.461-1.266 2.461-2.527V20.578c.841-.367 1.659-.632 2.462-.632c4.923 0 12.185 6.317 17.231 6.317c2.151 0 5.231-.871 7.384-2.527V6.052c-2.442 1.879-4.916 3.79-7.384 3.79c-4.923 0-12.291-6.316-17.231-6.316c-.83 0-1.64.152-2.462.316v-.316C13.923 2.127 12.824 1 11.462 1"
              />
            </svg>
            <span className="text-gray-500">{player.country}</span>
          </div>
          <span className="px-3 py-2 bg-gray-200 rounded-lg">
            {player.role}
          </span>
        </div>
        <hr />
        <div className="mt-3 font-semibold">Rating</div>
        <div className="my-3 flex justify-between">
          <span className="font-semibold">Batting Type</span>
          <span className="text-gray-400">{player.battingType}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Price: ${player.biddingPrice}</span>
          <button
            onClick={() => handleSelectedPlayers(player)}
            className="border px-3 py-2 rounded-lg hover:bg-slate-400"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
}
