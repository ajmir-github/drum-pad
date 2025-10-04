import { useEffect, useState, type KeyboardEvent } from "react";

export default function useKeyListener(onPress: (key: string) => any) {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const onKeyDown = ({ key }: KeyboardEvent) => {
    if (pressedKeys.includes(key)) return;
    setPressedKeys([...pressedKeys, key]);
    onPress(key);
  };
  const onKeyUp = ({ key }: KeyboardEvent) => {
    setPressedKeys(pressedKeys.filter((tKey) => tKey !== key));
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown as any, { once: true });
    window.addEventListener("keyup", onKeyUp as any);

    return () => {
      window.removeEventListener("keydown", onKeyDown as any);
      window.removeEventListener("keyup", onKeyUp as any);
    };
  });

  return pressedKeys;
}
