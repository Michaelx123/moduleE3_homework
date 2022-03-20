function analyzeArray (in_arr) {

let isEven = 0;
let isOdd = 0;
let isZero = 0;
let isOver = 0;

in_arr.forEach(function(item, index, array) {
    if (!isFinite(item) || (item ^ 0) !== item){
        isOver++;
    } else if (item == 0) {
        isZero++;        
    } else if (item % 2 ==0) {
        isEven++;
    } else {
        isOdd++;
    }
    })

console.log('Количество четных: '+isEven);
console.log('Количество нечетных: '+isOdd);
console.log('Количество равных нулю: '+isZero);
console.log('Количество иных элементов: '+isOver);
}

arr = [1, 2, null, NaN, 0, 0, 6, 7, 8, 12, undefined, 1.2, Infinity, -Infinity,'строка','0',-1.2,-2];
analyzeArray (arr);

//arr2 = [1, 2, null, NaN];

//analyzeArray (arr2);