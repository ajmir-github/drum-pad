import type { ReactNode } from "react";
import "./App.css";
import useSound from "use-sound";

import Kick from "../public/sounds/01kick2.wav";
import Snare from "../public/sounds/01snare1.wav";
import HiHit from "../public/sounds/hihat2.wav";
import OpenHit from "../public/sounds/open2.wav";

function classes(...cls: any[]) {
  return cls.filter((cls) => typeof cls === "string").join(" ");
}

function Button({
  children,
  src,
  className,
}: {
  children?: ReactNode;
  src: string;
  className?: string;
}) {
  const [play] = useSound(src);
  const handle = () => {
    play();
  };
  return (
    <button
      className={classes(
        "border-2 border-black/20 rounded cursor-pointer select-none text-5xl uppercase",
        className
      )}
      onClick={handle}
    >
      {children}
    </button>
  );
}

function App() {
  return (
    <div className="bg-gray-800 w-[100dvw] h-[100dvh] grid p-2 grid-cols-4 gap-2">
      <Button src={Kick} className="bg-red-500 hover:bg-red-600" />
      <Button src={Snare} className="bg-blue-500 hover:bg-blue-600" />
      <Button src={HiHit} className="bg-yellow-500 hover:bg-yellow-600" />
      <Button src={OpenHit} className="bg-pink-500 hover:bg-pink-600" />
      <Button src={OpenHit} />
      <Button src={OpenHit} />
      <Button src={OpenHit} />
      <Button src={OpenHit} />
      <Button src={OpenHit} />
      <Button src={OpenHit} />
      <Button src={OpenHit} />
      <Button src={OpenHit} />
      <Button src={OpenHit} />
      <Button src={OpenHit} />
      <Button src={OpenHit} />
      <Button src={OpenHit} />
    </div>
  );
}

export default App;
