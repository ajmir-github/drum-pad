export default function play(path: string) {
  const sound = new Audio(path);
  sound.play();
}
