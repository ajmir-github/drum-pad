import "./App.css";
import KeyPad from "./KeyPad";
import useKeyListener from "./utils/useKeyListener";

function App() {
  const handleKeyPress = (key: string) => {
    console.log({ key });
  };
  const pressedKeys = useKeyListener(handleKeyPress);
  return <KeyPad pressedKeys={pressedKeys} handleKeyPress={handleKeyPress} />;
}

export default App;
