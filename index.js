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
    var closestMatch = differences.reduce(function (prev, curr) {
        return prev.diff < curr.diff ? prev : curr;
    });
    return closestMatch.color;
};
var doTesting = function () {
    var test = function (hex, expected) {
        var result = hexToColorName(hex);
        if (result === expected) {
            console.log("\u2705 ".concat(hex, " -> ").concat(result));
        }
        else {
            console.log("\u274C ".concat(hex, " -> ").concat(result));
        }
    };
    var tests = [
        ["#ff0000", "red"],
        ["#72b2f4", "lightskyblue"],
        ["#367c2b", "darkgreen"],
        ["#008000", "green"],
    ];
    for (var _i = 0, tests_1 = tests; _i < tests_1.length; _i++) {
        var _a = tests_1[_i], hex = _a[0], expected = _a[1];
        test(hex, expected);
    }
};
doTesting();
exports.default = hexToColorName;
