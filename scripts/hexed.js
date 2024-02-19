let probs = {};

const tests = [
  ["Doubles", (items) => hasTuples(2, 1, items)],
  ["2x Doubles", (items) => hasTuples(2, 2, items)],
  ["3x Doubles", (items) => hasTuples(2, 3, items)],
  ["Triples", (items) => hasTuples(3, 1, items)],
  ["2x Triples", (items) => hasTuples(3, 2, items)],
  ["Quadruples", (items) => hasTuples(4, 1, items)],
  ["Quintuples", (items) => hasTuples(5, 1, items)],
];

const hasTuples = (tup, n, items) => {
  let matches = 0;

  for (let i = 0; i < 9; i += 1) {
    let count = 0;

    for (item of items) {
      if (item === i) {
        count += 1;
      }
    }

    matches += Math.floor(count / tup);
    if (matches >= n) return true;
  }

  return false;
};

const rounds = 500000;

for (let d6s = 0; d6s < 6; d6s += 1) {
  console.log(`\n## ${d6s}d6:`);
  console.log(`\n| Dice | ${tests.map((t) => t[0]).join(" | ")} |`);
  console.log(`| --- | ${tests.map(() => " --- ").join(" | ")} |`);

  probs[d6s] = {};

  for (let d10s = 0; d10s < 9; d10s += 1) {
    if (d6s + d10s < 2) continue;

    const results = tests.map(() => 0);
    const hexedResults = tests.map(() => 0);

    let str = [`${d10s}d10`];

    for (let i = 0; i < rounds; i += 1) {
      let items = [];

      for (let d6 = 0; d6 < d6s; d6 += 1) {
        items.push(Math.floor(Math.random() * 6));
      }

      for (let d10 = 0; d10 < d10s; d10 += 1) {
        items.push(Math.floor(Math.random() * 10));
      }

      for (let t = 0; t < tests.length; t += 1) {
        const [, test] = tests[t];
        const isHexed = items.filter(i => i === 6) > 1;

        if (test(items)) {
          results[t] += 1;
        } else if (test([...items, 7])) {
          l7Results[t] += 1;
        }
      }
    }

    probs[d6s][d10s] = {};

    for (let t = 0; t < results.length; t += 1) {
      let delta = l7Results[t] - results[t];
      let n = Math.round((delta * 1000) / rounds) / 10.0;
      str.push(`${n}%`);
    }

    console.log(`| ${str.join(" | ")} |`);
  }
}

console.log("");
