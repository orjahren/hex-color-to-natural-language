import { colourNameToHexMap } from "./colors";

const getHexDifference = (hex1: string, hex2: string): number => {
  const dec1 = parseInt(hex1, 16);
  const dec2 = parseInt(hex2, 16);
  return dec1 > dec2 ? dec1 - dec2 : dec2 - dec1;
};

const hexToColorName = (toFind: string): void => {
  const hexColor = toFind.replace("#", "");

  const differences = Object.keys(colourNameToHexMap).map((color) => {
    const hex = colourNameToHexMap[color].replace("#", "");
    const diff = getHexDifference(hex, hexColor);
    return { color, diff };
  });

  const smallestDiff = differences.reduce((prev, curr) => {
    return prev.diff < curr.diff ? prev : curr;
  });
  console.log(smallestDiff);
};

// Red
hexToColorName("#ff0000");

// light blue
hexToColorName("#72b2f4");

// some shade of green
hexToColorName("#367c2b");

// standard greeen
hexToColorName("#008000");
