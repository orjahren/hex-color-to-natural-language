import { colourNameToHexMap } from "./colors";

const getHexDifference = (hex1: string, hex2: string): number => {
  const dec1 = parseInt(hex1, 16);
  const dec2 = parseInt(hex2, 16);
  return dec1 > dec2 ? dec1 - dec2 : dec2 - dec1;
};

const hexToColorName = (toFind: string): string => {
  const hexColor = toFind.replace("#", "");

  const differences = Object.keys(colourNameToHexMap).map((color) => {
    const hex = colourNameToHexMap[color].replace("#", "");
    const diff = getHexDifference(hex, hexColor);
    return { color, diff };
  });

  const closestMatch = differences.reduce((prev, curr) => {
    return prev.diff < curr.diff ? prev : curr;
  });

  return closestMatch.color;
};

// Red
console.log(hexToColorName("#ff0000"));

// light blue
console.log(hexToColorName("#72b2f4"));

// some shade of green
console.log(hexToColorName("#367c2b"));

// standard greeen
console.log(hexToColorName("#008000"));
