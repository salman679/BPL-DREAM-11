import { useState } from "react";
import banner from "../../assets/banner-main.png";
import shadow from "../../assets/bg-shadow.png";
import dollar from "../../assets/dollar 1.svg";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [credit, setCredit] = useState(0);

  function handleCredit() {
    setCredit(credit + 12000);
  }

  return (
    <header className="container mx-auto px-24 mt-8">
      <div className="flex justify-between items-center">
        <img className="w-12 h-12" src={logo} alt="logo" />
        <div className="flex">
          <ul className="flex items-center gap-9 text-neutral-700 mr-9">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Fixture</a>
            </li>
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Schedules</a>
            </li>
          </ul>

          <button className="flex border rounded-lg gap-2 px-4 py-3">
            <span>{credit} Coin</span>
            <img src={dollar} alt="dollar" />
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${shadow})`,
        }}
        className="mt-5 bg-cover bg-no-repeat bg-center  py-14 px-2 rounded-2xl text-center bg-black text-white"
      >
        <img className="mx-auto" src={banner} alt="banner-main" />
        <div className="my-4">
          <h1 className="mb-3 font-bold text-3xl">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="font-medium text-lg text-gray-400">
            Beyond Boundaries Beyond Limits
          </p>
        </div>
        <div className="border inline-block border-yellow-300 rounded-xl">
          <button
            onClick={handleCredit}
            className="m-1 py-3 px-4 bg-yellow-300 rounded-lg text-black font-bold"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </header>
  );
}
