import "./App.css";
import classes from "./utils/classes";

function Pad({
  handle,
  symbol,
  className,
  pressedKeys,
}: {
  pressedKeys: string[];
  symbol: string;
  handle: (symbol: string) => void;
  className?: string;
}) {
  return (
    <button
      className={classes(
        "rounded-md cursor-pointer select-none active:opacity-75",
        pressedKeys.includes(symbol) && "opacity-50",
        className
      )}
      onClick={() => handle(symbol)}
    >
      <div className="text-2xl font-bold">{symbol}</div>
    </button>
  );
}

export default function KeyPad({
  handleKeyPress,
  pressedKeys,
}: {
  pressedKeys: string[];
  handleKeyPress: (key: string) => void;
}) {
  return (
    <div className="bg-gray-800 w-[100dvw] h-[100dvh] grid p-2 grid-cols-3 gap-2 text-white">
      {/* row 4 */}
      <Pad
        symbol="/"
        pressedKeys={pressedKeys}
        handle={handleKeyPress}
        className="bg-gray-400"
      />
      <Pad
        symbol="*"
        pressedKeys={pressedKeys}
        handle={handleKeyPress}
        className="bg-gray-400"
      />
      <Pad
        symbol="-"
        pressedKeys={pressedKeys}
        handle={handleKeyPress}
        className="bg-gray-400"
      />

      {/* row 4 */}
      <Pad
        symbol="7"
        pressedKeys={pressedKeys}
        handle={handleKeyPress}
        className="bg-orange-400"
      />
      <Pad
        symbol="8"
        pressedKeys={pressedKeys}
        handle={handleKeyPress}
        className="bg-green-400"
      />

      <Pad
        symbol="9"
        pressedKeys={pressedKeys}
        handle={handleKeyPress}
        className="bg-orange-500"
      />

      {/* row 3 */}

      <Pad
        symbol="4"
        pressedKeys={pressedKeys}
        handle={handleKeyPress}
        className="bg-yellow-600"
      />
      <Pad
        symbol="5"
        pressedKeys={pressedKeys}
        handle={handleKeyPress}
        className="bg-purple-400"
      />
      <Pad
        symbol="6"
        pressedKeys={pressedKeys}
        handle={handleKeyPress}
        className="bg-purple-500"
      />

      {/* row 2 */}
      <Pad
        symbol="1"
        pressedKeys={pressedKeys}
        handle={handleKeyPress}
        className="bg-yellow-500"
      />
      <Pad
        symbol="2"
        pressedKeys={pressedKeys}
        handle={handleKeyPress}
        className="bg-blue-500"
      />

      <Pad
        symbol="3"
        pressedKeys={pressedKeys}
        handle={handleKeyPress}
        className="bg-purple-600"
      />

      {/* row 1 */}
      <Pad
        symbol="0"
        pressedKeys={pressedKeys}
        handle={handleKeyPress}
        className="bg-red-500 col-span-2"
      />
      <Pad
        symbol="."
        pressedKeys={pressedKeys}
        handle={handleKeyPress}
        className="bg-sky-500"
      />
    </div>
  );
}
