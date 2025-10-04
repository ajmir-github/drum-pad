export default function classes(...cls: any[]) {
  return cls.filter((cls) => typeof cls === "string").join(" ");
}
