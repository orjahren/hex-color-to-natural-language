import { colourNameToHexMap } from "./colors";

const hexToRgb = (hex: string): [number, number, number] => {
  const hexColor = hex.replace("#", "");
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  return [r, g, b];
};

const getColorDifference = (color1: string, color2: string): number => {
  const [r1, g1, b1] = hexToRgb(color1);
  const [r2, g2, b2] = hexToRgb(color2);

  const rDiff = Math.abs(r1 - r2);
  const gDiff = Math.abs(g1 - g2);
  const bDiff = Math.abs(b1 - b2);

  return rDiff + gDiff + bDiff;
};

const hexToColorName = (toFind: string): string => {
  const hexColor = toFind.replace("#", "");

  const differences = Object.keys(colourNameToHexMap).map((color) => {
    const hex = colourNameToHexMap[color].replace("#", "");
    const diff = getColorDifference(hex, hexColor);
    return { color, diff };
  });

  const closestMatch = differences.reduce((prev, curr) => {
    return prev.diff < curr.diff ? prev : curr;
  });

  return closestMatch.color;
};

const doTesting = () => {
  console.log("Running tests...");
  const test = (hex: string, expected: string) => {
    const result = hexToColorName(hex);
    if (result === expected) {
      console.log(`✅ ${hex} -> ${result}`);
    } else {
      console.log(`❌ ${hex} -> ${result}`);
    }
  };

  const tests = [
    ["#ff0000", "red"],
    ["#72b2f4", "lightskyblue"],
    ["#367c2b", "darkgreen"],
    ["#008000", "green"],
  ];
  for (const [hex, expected] of tests) {
    test(hex, expected);
  }
};

doTesting();
export default hexToColorName;
