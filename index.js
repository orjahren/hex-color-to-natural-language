"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("./colors");
var getHexDifference = function (hex1, hex2) {
    var dec1 = parseInt(hex1, 16);
    var dec2 = parseInt(hex2, 16);
    return dec1 > dec2 ? dec1 - dec2 : dec2 - dec1;
};
var hexToColorName = function (toFind) {
    var hexColor = toFind.replace("#", "");
    var differences = Object.keys(colors_1.colourNameToHexMap).map(function (color) {
        var hex = colors_1.colourNameToHexMap[color].replace("#", "");
        var diff = getHexDifference(hex, hexColor);
        return { color: color, diff: diff };
    });
    var smallestDiff = differences.reduce(function (prev, curr) {
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
