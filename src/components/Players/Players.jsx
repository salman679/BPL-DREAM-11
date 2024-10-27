import { useEffect, useState } from "react";

export default function Players() {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    fetch("/src/data/players.json").then((res) => console.log(res));
    // .then((data) => console.log(data));
  }, []);

  return (
    <main className="container mx-auto px-24 mt-16">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-lg">Available Players</h4>
        <div className="border rounded-lg">
          <button className="bg-yellow-300 py-2 px-6 font-bold rounded-l-lg">
            Available
          </button>
          <button className="py-2 px-6 text-gray-500 rounded-r-lg">
            Selected(0)
          </button>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-3 gap-5">
        <div className="p-5 border rounded-xl">
          <img src="assets/Rectangle 2.png" alt="Rectangle" />
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
              <span className="text-base font-semibold">Viral Kohli</span>
            </div>
            <div className="flex justify-between text-center my-3">
              <div className="flex items-center gap-2">
                <img src="assets/flag.svg" alt="flag" />
                <span className="text-gray-500">india</span>
              </div>
              <span className="px-3 py-2 bg-gray-200 rounded-lg">
                All Rounder
              </span>
            </div>
            <hr />
            <div className="mt-3 font-semibold">Rating</div>
            <div className="my-3 flex justify-between">
              <span className="font-semibold">Left-Hand-Bat</span>
              <span className="text-gray-400">Left-Hand-Bat</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Price: $1500000</span>
              <button className="border px-3 py-2 rounded-lg">
                Choose Player
              </button>
            </div>
          </div>
        </div>
        <div className="p-5 border rounded-xl">
          <img src="assets/Rectangle 2.png" alt="Rectangle" />
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
              <span className="text-base font-semibold">Viral Kohli</span>
            </div>
            <div className="flex justify-between text-center my-3">
              <div className="flex items-center gap-2">
                <img src="assets/flag.svg" alt="flag" />
                <span className="text-gray-500">india</span>
              </div>
              <span className="px-3 py-2 bg-gray-200 rounded-lg">
                All Rounder
              </span>
            </div>
            <hr />
            <div className="mt-3 font-semibold">Rating</div>
            <div className="my-3 flex justify-between">
              <span className="font-semibold">Left-Hand-Bat</span>
              <span className="text-gray-400">Left-Hand-Bat</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Price: $1500000</span>
              <button className="border px-3 py-2 rounded-lg">
                Choose Player
              </button>
            </div>
          </div>
        </div>
        <div className="p-5 border rounded-xl">
          <img src="assets/Rectangle 2.png" alt="Rectangle" />
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
              <span className="text-base font-semibold">Viral Kohli</span>
            </div>
            <div className="flex justify-between text-center my-3">
              <div className="flex items-center gap-2">
                <img src="assets/flag.svg" alt="flag" />
                <span className="text-gray-500">india</span>
              </div>
              <span className="px-3 py-2 bg-gray-200 rounded-lg">
                All Rounder
              </span>
            </div>
            <hr />
            <div className="mt-3 font-semibold">Rating</div>
            <div className="my-3 flex justify-between">
              <span className="font-semibold">Left-Hand-Bat</span>
              <span className="text-gray-400">Left-Hand-Bat</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Price: $1500000</span>
              <button className="border px-3 py-2 rounded-lg">
                Choose Player
              </button>
            </div>
          </div>
        </div>
        <div className="p-5 border rounded-xl">
          <img src="assets/Rectangle 2.png" alt="Rectangle" />
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
              <span className="text-base font-semibold">Viral Kohli</span>
            </div>
            <div className="flex justify-between text-center my-3">
              <div className="flex items-center gap-2">
                <img src="assets/flag.svg" alt="flag" />
                <span className="text-gray-500">india</span>
              </div>
              <span className="px-3 py-2 bg-gray-200 rounded-lg">
                All Rounder
              </span>
            </div>
            <hr />
            <div className="mt-3 font-semibold">Rating</div>
            <div className="my-3 flex justify-between">
              <span className="font-semibold">Left-Hand-Bat</span>
              <span className="text-gray-400">Left-Hand-Bat</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Price: $1500000</span>
              <button className="border px-3 py-2 rounded-lg">
                Choose Player
              </button>
            </div>
          </div>
        </div>
        <div className="p-5 border rounded-xl">
          <img src="assets/Rectangle 2.png" alt="Rectangle" />
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
              <span className="text-base font-semibold">Viral Kohli</span>
            </div>
            <div className="flex justify-between text-center my-3">
              <div className="flex items-center gap-2">
                <img src="assets/flag.svg" alt="flag" />
                <span className="text-gray-500">india</span>
              </div>
              <span className="px-3 py-2 bg-gray-200 rounded-lg">
                All Rounder
              </span>
            </div>
            <hr />
            <div className="mt-3 font-semibold">Rating</div>
            <div className="my-3 flex justify-between">
              <span className="font-semibold">Left-Hand-Bat</span>
              <span className="text-gray-400">Left-Hand-Bat</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Price: $1500000</span>
              <button className="border px-3 py-2 rounded-lg">
                Choose Player
              </button>
            </div>
          </div>
        </div>
        <div className="p-5 border rounded-xl">
          <img src="assets/Rectangle 2.png" alt="Rectangle" />
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
              <span className="text-base font-semibold">Viral Kohli</span>
            </div>
            <div className="flex justify-between text-center my-3">
              <div className="flex items-center gap-2">
                <img src="assets/flag.svg" alt="flag" />
                <span className="text-gray-500">india</span>
              </div>
              <span className="px-3 py-2 bg-gray-200 rounded-lg">
                All Rounder
              </span>
            </div>
            <hr />
            <div className="mt-3 font-semibold">Rating</div>
            <div className="my-3 flex justify-between">
              <span className="font-semibold">Left-Hand-Bat</span>
              <span className="text-gray-400">Left-Hand-Bat</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Price: $1500000</span>
              <button className="border px-3 py-2 rounded-lg">
                Choose Player
              </button>
            </div>
          </div>
        </div>
        <div className="p-5 border rounded-xl">
          <img src="assets/Rectangle 2.png" alt="Rectangle" />
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
              <span className="text-base font-semibold">Viral Kohli</span>
            </div>
            <div className="flex justify-between text-center my-3">
              <div className="flex items-center gap-2">
                <img src="assets/flag.svg" alt="flag" />
                <span className="text-gray-500">india</span>
              </div>
              <span className="px-3 py-2 bg-gray-200 rounded-lg">
                All Rounder
              </span>
            </div>
            <hr />
            <div className="mt-3 font-semibold">Rating</div>
            <div className="my-3 flex justify-between">
              <span className="font-semibold">Left-Hand-Bat</span>
              <span className="text-gray-400">Left-Hand-Bat</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Price: $1500000</span>
              <button className="border px-3 py-2 rounded-lg">
                Choose Player
              </button>
            </div>
          </div>
        </div>
        <div className="p-5 border rounded-xl">
          <img src="assets/Rectangle 2.png" alt="Rectangle" />
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
              <span className="text-base font-semibold">Viral Kohli</span>
            </div>
            <div className="flex justify-between text-center my-3">
              <div className="flex items-center gap-2">
                <img src="assets/flag.svg" alt="flag" />
                <span className="text-gray-500">india</span>
              </div>
              <span className="px-3 py-2 bg-gray-200 rounded-lg">
                All Rounder
              </span>
            </div>
            <hr />
            <div className="mt-3 font-semibold">Rating</div>
            <div className="my-3 flex justify-between">
              <span className="font-semibold">Left-Hand-Bat</span>
              <span className="text-gray-400">Left-Hand-Bat</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Price: $1500000</span>
              <button className="border px-3 py-2 rounded-lg">
                Choose Player
              </button>
            </div>
          </div>
        </div>
        <div className="p-5 border rounded-xl">
          <img src="assets/Rectangle 2.png" alt="Rectangle" />
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
              <span className="text-base font-semibold">Viral Kohli</span>
            </div>
            <div className="flex justify-between text-center my-3">
              <div className="flex items-center gap-2">
                <img src="assets/flag.svg" alt="flag" />
                <span className="text-gray-500">india</span>
              </div>
              <span className="px-3 py-2 bg-gray-200 rounded-lg">
                All Rounder
              </span>
            </div>
            <hr />
            <div className="mt-3 font-semibold">Rating</div>
            <div className="my-3 flex justify-between">
              <span className="font-semibold">Left-Hand-Bat</span>
              <span className="text-gray-400">Left-Hand-Bat</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Price: $1500000</span>
              <button className="border px-3 py-2 rounded-lg">
                Choose Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
