import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navber/Navbar";
import Players from "./components/Players/Players";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

function App() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [selectedButton, setSelectedButton] = useState(false);
  const [credit, setCredit] = useState(0);

  function handleCredit() {
    setCredit(credit + 12000000);
  }

  useEffect(() => {
    fetch("/players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  function handleSelectedPlayers(sPlayer) {
    const selectedPlayer = selectedPlayers.find(
      (player) => player.playerId === sPlayer.playerId
    );

    if (selectedPlayer) {
      return toast.error("This Player Already Selected.");
    } else if (selectedPlayers.length === 6) {
      return toast.warn("6 Players Already Selected.");
    }

    if (sPlayer.biddingPrice < credit) {
      setCredit(credit - sPlayer.biddingPrice);
      toast.success("The Player has been successfully added.", {
        position: "top-center",
      });
      setSelectedPlayers([...selectedPlayers, sPlayer]);
    } else {
      toast.error("You don't have enough MONEY.");
    }
  }

  function handleRemoveSelected(id) {
    const updatedSelectedPlayers = selectedPlayers.filter((player) => {
      return player.playerId !== id;
    });

    setSelectedPlayers(updatedSelectedPlayers);

    toast.info("The Player has been successfully removed.");
  }

  return (
    <>
      <Navbar credit={credit} handleCredit={handleCredit} />
      <ToastContainer />
      <main className="container mx-auto px-24 mt-16">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-lg">
            {selectedButton
              ? `Selected Players (${selectedPlayers.length}/6)`
              : "Available Players"}
          </h4>
          <div className="border rounded-lg">
            <button
              className={` py-2 px-6  rounded-l-lg ${
                selectedButton ? "text-gray-500" : "font-bold bg-yellow-300"
              }`}
              onClick={() => setSelectedButton(false)}
            >
              Available
            </button>
            <button
              onClick={() => setSelectedButton(true)}
              className={`py-2 px-6  rounded-r-lg ${
                selectedButton
                  ? "font-bold bg-yellow-300 text-black"
                  : "text-gray-500"
              }`}
            >
              Selected({selectedPlayers.length})
            </button>
          </div>
        </div>

        {selectedButton ? (
          <div className="flex flex-col gap-5 mt-7">
            {selectedPlayers.map((selectedPlayer) => (
              <SelectedPlayers
                key={selectedPlayer.playerId}
                selectedPlayer={selectedPlayer}
                handleRemoveSelected={handleRemoveSelected}
              />
            ))}
          </div>
        ) : (
          <Players
            players={players}
            handleSelectedPlayers={handleSelectedPlayers}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
