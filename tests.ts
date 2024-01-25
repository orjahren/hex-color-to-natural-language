import hexToColorName from ".";

const runTests = () => {
  const testcase = (hex: string, expected: string) => {
    const result = hexToColorName(hex);
    console.log(`${result === expected ? "✅" : "❌"} ${hex} -> ${result}`);
  };

  const tests = [
    ["#ff0000", "red"],
    ["#72b2f4", "cornflowerblue"],
    ["#367c2b", "forestgreen"],
    ["#008000", "green"],
  ];

  for (const [hex, expected] of tests) {
    testcase(hex, expected);
  }
};

runTests();
