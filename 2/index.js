import { data } from "./data.js";

// bonuspunten voor rock paper scissors
const rps = {
  X: 1,
  Y: 2,
  Z: 3,
};

// punten voor rps combo
const outcomes = {
  AX: 3,
  AY: 6,
  AZ: 0,
  BX: 0,
  BY: 3,
  BZ: 6,
  CX: 6,
  CY: 0,
  CZ: 3,
};

// welke RPS als 2e letter loss/draw/win is? (AX = rock - lose)
const winLoseOptions = {
  AX: "Z",
  AY: "X",
  AZ: "Y",
  BX: "X",
  BY: "Y",
  BZ: "Z",
  CX: "Y",
  CY: "Z",
  CZ: "X",
};

const opdracht = (opdracht_nummer) => {
  let result = 0;
  data.forEach((el, i) => {
    let ownRps;
    if (opdracht_nummer === 1) {
      ownRps = el.slice(1);
    } else if (opdracht_nummer === 2) {
      ownRps = winLoseOptions[el];
    }
    const rpsResult = rps[ownRps];
    const outcomeResult = outcomes[el[0] + ownRps];
    result = result + rpsResult + outcomeResult;
  });
  console.log(result);
};

opdracht(2);
