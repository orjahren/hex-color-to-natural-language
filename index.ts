import { colourNameToHexMap } from "./colors";

type Rgb = [number, number, number];

const hexToRgb = (hex: string): Rgb => {
  const hexColor = hex.replace("#", "");
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  return [r, g, b];
};

const getColorDifference = (rgbToFind: Rgb, candHex: string): number => {
  const [r1, g1, b1] = rgbToFind;
  const [r2, g2, b2] = hexToRgb(candHex);

  const rDiff = Math.abs(r1 - r2);
  const gDiff = Math.abs(g1 - g2);
  const bDiff = Math.abs(b1 - b2);

  return rDiff + gDiff + bDiff;
};

const hexToColorName = (toFind: string): string => {
  const rgbToFind = hexToRgb(toFind);

  const differences = Object.keys(colourNameToHexMap).map((color) => {
    const testHex = colourNameToHexMap[color];
    const diff = getColorDifference(rgbToFind, testHex);
    return { color, diff };
  });

  const closestMatch = differences.reduce((prev, curr) => {
    return prev.diff < curr.diff ? prev : curr;
  });

  return closestMatch.color;
};

export default hexToColorName;
