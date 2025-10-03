import "./App.css";

function classes(...cls: any[]) {
  return cls.filter((cls) => typeof cls === "string").join(" ");
}

function App() {
  return (
    <div className="bg-gray-800 w-[100dvw] h-[100dvh] grid p-2 grid-cols-3 gap-2 text-white">
      {/* row 4 */}
      <button
        className={classes(
          "rounded cursor-pointer select-none bg-gray-400 hover:bg-transparent"
        )}
      >
        <div className="text-2xl font-bold">/</div>
        <div>Reset</div>
      </button>
      <button
        className={classes(
          "rounded cursor-pointer select-none bg-gray-400 hover:bg-transparent"
        )}
      >
        <div className="text-2xl font-bold">*</div>
        <div>Clock</div>
      </button>
      <button
        className={classes(
          "rounded cursor-pointer select-none bg-gray-400 hover:bg-transparent"
        )}
      >
        <div className="text-2xl font-bold">-</div>
        <div>Kit</div>
      </button>
      {/* row 4 */}
      <button
        className={classes(
          "rounded cursor-pointer select-none bg-orange-400 hover:bg-transparent"
        )}
      >
        <div className="text-2xl font-bold">7</div>
        <div>Crash</div>
      </button>
      <button
        className={classes(
          "rounded cursor-pointer select-none bg-green-400 hover:bg-transparent"
        )}
      >
        <div className="text-2xl font-bold">8</div>
        <div>Clap</div>
      </button>
      <button
        className={classes(
          "rounded cursor-pointer select-none bg-orange-500 hover:bg-transparent"
        )}
      >
        <div className="text-2xl font-bold">9</div>
        <div>Ride</div>
      </button>
      {/* row 3 */}
      <button
        className={classes(
          "rounded cursor-pointer select-none bg-yellow-600 hover:bg-transparent"
        )}
      >
        <div className="text-2xl font-bold">4</div>
        <div>Hit Open</div>
      </button>
      <button
        className={classes(
          "rounded cursor-pointer select-none bg-purple-400 hover:bg-transparent"
        )}
      >
        <div className="text-2xl font-bold">5</div>
        <div>Tom 1</div>
      </button>
      <button
        className={classes(
          "rounded cursor-pointer select-none bg-purple-500 hover:bg-transparent"
        )}
      >
        <div className="text-2xl font-bold">6</div>
        <div>Tom 2</div>
      </button>
      {/* row 2 */}
      <button
        className={classes(
          "rounded cursor-pointer select-none bg-yellow-500 hover:bg-transparent"
        )}
      >
        <div className="text-2xl font-bold">1</div>
        <div>Hit Closed</div>
      </button>
      <button
        className={classes(
          "rounded cursor-pointer select-none bg-blue-500 hover:bg-transparent"
        )}
      >
        <div className="text-2xl font-bold">2</div>
        <div>Snare</div>
      </button>
      <button
        className={classes(
          "rounded cursor-pointer select-none bg-purple-600 hover:bg-transparent"
        )}
      >
        <div className="text-2xl font-bold">3</div>
        <div>Floor</div>
      </button>
      {/* row 1 */}
      <button
        className={classes(
          "rounded cursor-pointer select-none bg-red-500 hover:bg-transparent col-span-2"
        )}
      >
        <div className="text-2xl font-bold">0</div>
        <div>Kick</div>
      </button>
      <button
        className={classes(
          "rounded cursor-pointer select-none bg-sky-400 hover:bg-transparent"
        )}
      >
        <div className="text-2xl font-bold">.</div>
        <div>Stick</div>
      </button>
    </div>
  );
}

export default App;
