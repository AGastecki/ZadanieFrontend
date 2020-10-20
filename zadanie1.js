const numberFromPrompt = prompt("Podaj liczbę");

function isEven(numberToCheck) {
  const parsedNumber = Number(numberToCheck);
  if (parsedNumber !== NaN && typeof parsedNumber === "number")
    return numberToCheck % 2 === 0;
}
if (isEven(numberFromPrompt)) {
  alert("Jest parzysta");
} else {
  alert("Nie jest parzysta");
}

// const numberFromPrompt = prompt("Podaj liczbę");

// function isEven(numberToCheck) {
//   const parsedNumber = Number(numberToCheck);
//   if (parsedNumber !== NaN && typeof parsedNumber === "number")
//     return numberToCheck <= 35 && numberToCheck >= 2;
// }
// if (isEven(numberFromPrompt)) {
//   alert("Mieści się w przedziale");
// } else {
//   alert("Nie mieści się w przedziale");
// }

// const numberFromPrompt = prompt("Podaj ocenę od 0 do 3");
// function isPass(numberToCheck) {
//   const parsedNumber = Number(numberToCheck);
//   if (parsedNumber !== NaN && typeof parsedNumber === "number") {
//     return parsedNumber;
//   }
//   return;
// }

// switch (isPass(numberFromPrompt)) {
//   case 1:
//     alert("Zdałes egzamin");
//     break;
//   case 2:
//     alert("Zaliczona tylko teoria");
//     break;
//   case 3:
//     alert("Zaliczona tylko praktyka");
//     break;
//   case 0:
//     alert("Egzamin do poprawy");
//     break;

//   default:
//     alert("Zła ocena");
//     break;
// }

// function giveMeSomething(sentence) {
//   const spaceAndSomething = "something ";
//   return spaceAndSomething + sentence;
// }
// console.log(giveMeSomething("is better than nothing"));

// const footballGames = {
//   Win: 3,
//   Draw: 1,
//   Defeat: 0,
// };
// function footballScores(numberOfWin, numberOfDraw, numberOfDefeat) {
//   return (
//     numberOfWin * footballGames.Win +
//     numberOfDraw * footballGames.Draw +
//     numberOfDefeat * footballGames.Defeat
//   );
// }
// alert(footballScores(5, 0, 2));

// const numberOfLimbs = {
//   chicken: 2,
//   pig: 4,
//   cow: 4,
// };
// function animals(numberOfChicken, numberOfPig, numberOfCow) {
//   return (
//     numberOfChicken * numberOfLimbs.chicken +
//     numberOfPig * numberOfLimbs.pig +
//     numberOfCow * numberOfLimbs.cow
//   );
// }
// alert(animals(2, 3, 5));
