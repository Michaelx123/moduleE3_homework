function getSum(a1)
{
  return function(a2){
    return a1 + a2
  }
}

console.log(getSum(-1)(2))
//console.log(getSum(-1))