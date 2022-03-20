/*Все натуральные числа разбиваются на три класса: 
- единицу (имеющую один натуральный делитель), 
- простые числа (имеющие два натуральных делителя),
- составные числа (имеющие больше двух натуральных делителей). */
function checkPrime (n) {    
    if (typeof (n) !== "number"){
      return 'Введите число. '+n+' - не является числом'
    } else if (n<1 || (n ^ 0) !== n){
        return 'Число '+n+' не является натуральным.'
    } else if (n == 1){
        return 'Число является единицей и не относится к простым или составным.'
    } else if (n>1000) {
        return 'Данные не верны.(число '+n+' больше 1000, что не соответствует условию задачи)'
    } else if (n == 2) {
        return 'Число '+n+' простое.'
    } else {
    let limit = Math.sqrt(n)
        i = 2
        while (i <= limit ) {
          if (n % i == 0) {
            return 'Число '+n+' составное.'
          }
          i += 1
        }
    
    }   
    
  return 'Число '+n+' простое.'
}


console.log(checkPrime('gfdg'))
console.log(checkPrime(4))
console.log(checkPrime(12))
console.log(checkPrime(199))
console.log(checkPrime(1199))
console.log(checkPrime(-23))
console.log(checkPrime('0'))
console.log(checkPrime(0))
console.log(checkPrime(1))
console.log(checkPrime(undefined))
console.log(checkPrime(NaN))
console.log(checkPrime(Infinity))
console.log(checkPrime(-Infinity))
console.log(checkPrime(1.2))

