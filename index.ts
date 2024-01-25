import { colourNameToHexMap } from "./colors";

const getHexDifference = (hex1, hex2) => {
  const dec1 = parseInt(hex1, 16);
  const dec2 = parseInt(hex2, 16);
  return dec1 > dec2 ? dec1 - dec2 : dec2 - dec1;
};

const hexToColorName = (toFind) => {
  const hexColor = toFind.replace("#", "");

  const differences = Object.keys(colourNameToHexMap).map((color) => {
    //console.log(color);
    const hex = colourNameToHexMap[color].replace("#", "");
    const diff = getHexDifference(hex, hexColor);
    return { color, diff };
  });
  //console.log(differences);
  const smallestDiff = differences.reduce((prev, curr) => {
    return prev.diff < curr.diff ? prev : curr;
  });
  console.log(smallestDiff);
};

// Red
hexToColorName("#ff0000");

// lyseblå
hexToColorName("#72b2f4");

// grønn
hexToColorName("#367c2b");
