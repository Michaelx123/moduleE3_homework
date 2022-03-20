const echoExponentiation1 = (x, n) => {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

const echoExponentiation2 = (x, n) => {
  return Math.pow(x, n);   
}

console.log(echoExponentiation1(5,2));
console.log(echoExponentiation2(5,2));
