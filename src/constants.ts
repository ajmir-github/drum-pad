export const KEYS = {
  kick: "0",
  snare: "2",
  tom1: "5",
  tom2: "6",
  floor: "3",
  openhh: "4",
  closehh: "1",
  crash: "7",
  ride: "9",
  rim: ".",
  splash: "8",
} as const;

interface KIT {
  name: string;
  [KEYS.kick]: string;
  [KEYS.snare]: string;
  [KEYS.tom1]?: string;
  [KEYS.tom2]?: string;
  [KEYS.floor]?: string;
  [KEYS.openhh]?: string;
  [KEYS.closehh]?: string;
  [KEYS.crash]?: string;
  [KEYS.ride]?: string;
  [KEYS.rim]?: string;
}

export const KITS: KIT[] = [
  {
    name: "Standard",
    [KEYS.kick]: "./audio/standard/bass.mp3",
    [KEYS.snare]: "./audio/standard/snare.mp3",
    [KEYS.tom1]: "./audio/standard/tom1.mp3",
    [KEYS.tom2]: "./audio/standard/tom2.mp3",
    [KEYS.floor]: "./audio/standard/floor.mp3",
    [KEYS.openhh]: "./audio/standard/hihat-open.mp3",
    [KEYS.closehh]: "./audio/standard/hihat-closed.mp3",
    [KEYS.crash]: "./audio/standard/crash.mp3",
    [KEYS.ride]: "./audio/standard/ride.mp3",
    [KEYS.rim]: "./audio/standard/rim.mp3",
  },
  {
    name: "Powerful",
    [KEYS.kick]: "./audio/powerful/bass.mp3",
    [KEYS.snare]: "./audio/powerful/snare-drum.mp3",
    [KEYS.tom1]: "./audio/powerful/tom1.mp3",
    [KEYS.tom2]: "./audio/powerful/tom2.mp3",
    [KEYS.floor]: "./audio/powerful/floor-tom.mp3",
    [KEYS.openhh]: "./audio/powerful/hihat-open.mp3",
    [KEYS.closehh]: "./audio/powerful/hihat.mp3",
    [KEYS.crash]: "./audio/powerful/crash.mp3",
    [KEYS.ride]: "./audio/powerful/ride.mp3",
    [KEYS.rim]: "./audio/powerful/snare-stick.mp3",
  },
  {
    name: "Real Drum",
    [KEYS.kick]: "./audio/real-drum/kick.mp3",
    [KEYS.snare]: "./audio/real-drum/snare.mp3",
    [KEYS.tom1]: "./audio/real-drum/tom1.mp3",
    [KEYS.tom2]: "./audio/real-drum/tom2.mp3",
    [KEYS.floor]: "./audio/real-drum/floor.mp3",
    [KEYS.openhh]: "./audio/real-drum/openhh.mp3",
    [KEYS.closehh]: "./audio/real-drum/closehh.mp3",
    [KEYS.crash]: "./audio/real-drum/crashl.mp3",
    [KEYS.ride]: "./audio/real-drum/ride.mp3",
    [KEYS.rim]: "./audio/real-drum/bell.mp3",
  },
  {
    name: "Kit-6",
    [KEYS.kick]: "./audio/kit-6/kick.wav",
    [KEYS.snare]: "./audio/kit-6/snare.wav",
    [KEYS.tom1]: "./audio/kit-6/clave.wav",
    [KEYS.tom2]: "./audio/kit-6/cowbell.wav",
    [KEYS.floor]: "./audio/kit-6/bass.wav",
    [KEYS.openhh]: "./audio/kit-6/hihat.wav",
    [KEYS.closehh]: "./audio/kit-6/maracas.wav",
    // [KEYS.crash]: "./audio/kit-6/crashl.mp3",
    // [KEYS.ride]: "./audio/kit-6/ride.mp3",
    [KEYS.rim]: "./audio/kit-6/clap.wav",
  },
];
