import "./App.css";
import KeyPad from "./KeyPad";
import useKeyListener from "./utils/useKeyListener";
import { KITS } from "./constants";
import { useState } from "react";

function play(path: string) {
  const sound = new Audio(path);
  sound.play();
}

function App() {
  const [kitIndex, setKitIndex] = useState(0);

  function changeKit() {
    setKitIndex(kitIndex + 1);
    if (KITS.length - 1 === kitIndex) setKitIndex(0);
    console.log(KITS[kitIndex].name);
  }

  const handleKeyPress = (key: string) => {
    if (key === "-") return changeKit();

    // @ts-ignore
    const sound = KITS[kitIndex][key] as undefined | string;
    if (sound) play(sound);
  };
  const pressedKeys = useKeyListener(handleKeyPress);
  return <KeyPad pressedKeys={pressedKeys} handleKeyPress={handleKeyPress} />;
}

export default App;
