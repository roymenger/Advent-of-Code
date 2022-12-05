import { data } from "./data.js";

let all = [];
let x = [];

data.forEach((el, i) => {
  if (el !== 0) {
    x.push(el);
  } else {
    all.push(x);
    x = [];
  }
});

let result = all.map((el) => {
  return el.reduce(addValues, 0);
});

result = result.sort(sortValues);

console.log(result.reverse());

function addValues(total, num) {
  return total + num;
}

function sortValues(a, b) {
  return a - b;
}
