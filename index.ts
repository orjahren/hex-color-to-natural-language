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

const doTesting = () => {
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
