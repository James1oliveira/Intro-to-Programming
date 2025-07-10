
const scores = {
  James: 0,           
  Bob: 0,
  Sam: 0,
};

const aliceScore = scores.James;
console.log("James's Score:", aliceScore);

const bobScore = scores['Bob'];
console.log("Bob's Score:", bobScore);

const SamScore = scores['Sam'];
console.log("Sam's Score:", SamScore);

const playerNames = Object.keys(scores);
console.log("Player Names:", playerNames);

const playerScores = Object.values(scores);
console.log("Player Scores:", playerScores);

scores.James += 10;
console.log("Updated James Score:", scores.James);

scores['Sam'] += 5;
console.log("Updated Sam Score:", scores['Sam']);

scores['Bob'] += 8;
console.log("Updated Bob Score:", scores['Bob'])

console.log("Final Scores Object:", scores);