// # Домашнє завдання - Урок 12

//Варіант №1
function Lego(seriesName, sets, totalSets) {
  this.seriesName = seriesName;
  this.sets = sets[("setNumber", "name", "pieces", "releaseYear", "price")];
  function ratings(average, reviews) {
    this.average = average;
    this.reviews = reviews;
  }

  this.totalSets = totalSets;
}
let lego1 = new Lego(
  "Yellow Racers",
  ["31023-1", "Yellow Racers", "328", "2014", "8 EUR"],
  ("12", "25"),
  19
);
let lego2 = new Lego(
  "Roaring Power",
  ["31024-1", "Roaring Power", "374", "2014", "12 EUR"],
  ("4", "31"),
  22
);
console.log(lego1, lego2);

//Варіант 2
// let Lego = {
//   seriesName: "Lego Creator",
//   sets: [
//     {
//       setNumber: "31023-1",
//       name: "Yellow Racers",
//       pieces: "328",
//       releaseYear: "2014",
//       themes: ["Airport", "Racers"],
//       price: "8 EUR",
//       ratings: {
//         average: 12,
//         reviews: 25,
//       },
//     },
//   ],
//   totalSets: 19,
// };

// console.log(Lego);
