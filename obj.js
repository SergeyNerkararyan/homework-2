// task 1
function shallowCompare(a, b) {
  for (key in a) {
    for (key in b) {
      if (a.key === b.key && a[key] === b[key]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

const a = {
  a: "1",
};

const b = {
  a: "1",
};

console.log(shallowCompare(a, b));

// task 2
function isogramCheck(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.split(str[i]).length - 1 > 1) {
      return false;
    }
  }
  return true;
}
const str = "sdagsedth";
console.log(isogramCheck(str));

// task 3
function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else {
    let a = 0;
    let b = 1;
    for (let i = 2; i <= num; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
}
console.log(fibonacci(10));
// task 4
function checkQuotientOrRemainder(n) {
  let mult = 1;
  let sum = 0;
  if (n !== 0) {
    while (n > 0) {
      let a = n % 10;
      n = (n - a) / 10;
      mult *= a;
      sum += a;
    }
    if (mult % sum === 0) {
      return `Quotient is ${mult / sum}`;
    } else {
      return `Remainder is ${mult % sum}`;
    }
  } else if (n === 0) {
    return "cannot calculate";
  }
}
console.log(checkQuotientOrRemainder(455));
// task 5 arden @ndhanur chatum lucum@ kar, dra hamar animast gta uxarkel@
