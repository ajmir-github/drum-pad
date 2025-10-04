import { useEffect } from "react";
import "./App.css";

function classes(...cls: any[]) {
  return cls.filter((cls) => typeof cls === "string").join(" ");
}

function Pad({
  handle,
  symbol,
  label,
  className,
  active,
}: {
  active?: boolean;
  symbol: string;
  label: string;
  handle: (symbol: string) => void;
  className?: string;
}) {
  return (
    <button
      className={classes(
        "rounded cursor-pointer select-none active:opacity-75",
        active && "opacity-75",
        className
      )}
      onClick={() => handle(symbol)}
    >
      <div className="text-2xl font-bold">{label}</div>
      <div>{symbol}</div>
    </button>
  );
}

function App() {
  return (
    <div className="bg-gray-800 w-[100dvw] h-[100dvh] grid p-2 grid-cols-3 gap-2 text-white">
      {/* row 4 */}
      <Pad
        label="Reset"
        symbol="/"
        handle={(key) => console.log({ key })}
        className="bg-gray-400"
      />
      <Pad
        label="Clock"
        symbol="*"
        handle={(key) => console.log({ key })}
        className="bg-gray-400"
      />
      <Pad
        label="Kit"
        symbol="-"
        handle={(key) => console.log({ key })}
        className="bg-gray-400"
      />

      {/* row 4 */}
      <button
        className={classes("rounded cursor-pointer select-none bg-orange-400")}
      >
        <div className="text-2xl font-bold">Crash</div>
        <div>7</div>
      </button>
      <button
        className={classes("rounded cursor-pointer select-none bg-green-400")}
      >
        <div className="text-2xl font-bold">Clap</div>
        <div>8</div>
      </button>
      <button
        className={classes("rounded cursor-pointer select-none bg-orange-500")}
      >
        <div className="text-2xl font-bold">Ride</div>
        <div>9</div>
      </button>
      {/* row 3 */}
      <button
        className={classes("rounded cursor-pointer select-none bg-yellow-600")}
      >
        <div className="text-2xl font-bold">Hit Open</div>
        <div>4</div>
      </button>
      <button
        className={classes("rounded cursor-pointer select-none bg-purple-400")}
      >
        <div className="text-2xl font-bold">Tom 1</div>
        <div>5</div>
      </button>
      <button
        className={classes("rounded cursor-pointer select-none bg-purple-500")}
      >
        <div className="text-2xl font-bold">Tom 2</div>
        <div>6</div>
      </button>
      {/* row 2 */}
      <button
        className={classes("rounded cursor-pointer select-none bg-yellow-500")}
      >
        <div className="text-2xl font-bold">Hit Closed</div>
        <div>1</div>
      </button>
      <button
        className={classes("rounded cursor-pointer select-none bg-blue-500")}
      >
        <div className="text-2xl font-bold">Snare</div>
        <div>2</div>
      </button>
      <button
        className={classes("rounded cursor-pointer select-none bg-purple-600")}
      >
        <div className="text-2xl font-bold">Floor</div>
        <div>3</div>
      </button>
      {/* row 1 */}
      <button
        className={classes(
          "rounded cursor-pointer select-none bg-red-500 col-span-2"
        )}
      >
        <div className="text-2xl font-bold">Kick</div>
        <div>0</div>
      </button>
      <button
        className={classes("rounded cursor-pointer select-none bg-sky-400")}
      >
        <div className="text-2xl font-bold">Stick</div>
        <div>.</div>
      </button>
    </div>
  );
}

export default App;
