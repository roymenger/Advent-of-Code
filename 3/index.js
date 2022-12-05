import { data } from "./data.js";

const lower = [..."abcdefghijklmnopqrstuvwxyz"];
const upper = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const lowerPriorities = {};

for (const key of lower) {
  lowerPriorities[key] = lower.indexOf(key) + 1;
}

const upperPriorities = {};

for (const key of upper) {
  upperPriorities[key] = upper.indexOf(key) + 27;
}

let prioSum = 0;

const opdracht1 = () => {
  data.forEach((el, i) => {
    const left = [...el.substring(0, el.length / 2)];
    const right = [...el.substring(el.length / 2, el.length)];
    const common = left.filter((l) => {
      return right.includes(l);
    });
    const uniqueCommon = [...new Set(common)][0];
    if (uniqueCommon == uniqueCommon.toUpperCase()) {
      prioSum = prioSum + upperPriorities[uniqueCommon];
    } else {
      prioSum = prioSum + lowerPriorities[uniqueCommon];
    }
  });
  console.log(prioSum);
};

const opdracht2 = () => {
  let groups = [];
  let newGroup = [];
  let counter = 1;
  data.forEach((el, i) => {
    if (counter <= 3) {
      newGroup.push(el);
    }
    if (counter === 3) {
      groups.push(newGroup);
      counter = 1;
      newGroup = [];
    } else {
      counter = counter + 1;
    }
  });

  groups.forEach((el) => {
    const common = [...el[0]].filter((x) => {
      return [...el[1]].includes(x) && [...el[2]].includes(x);
    });
    const uniqueCommon = [...new Set(common)][0];
    if (uniqueCommon == uniqueCommon.toUpperCase()) {
      prioSum = prioSum + upperPriorities[uniqueCommon];
    } else {
      prioSum = prioSum + lowerPriorities[uniqueCommon];
    }
  });
  console.log(prioSum);
};

// opdracht1()
opdracht2();
