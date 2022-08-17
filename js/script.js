'use strict';

// const mainFunction = (exponentiation) => {
//
//   const number = +prompt('enter the number pls');
//   const degree = +prompt('enter the degree pls');
//
//   exponentiation(number,degree)
// }
//
// const exponentiation = (number, degree) => {
//   const result = Math.pow(number, degree);
//   return alert(result);
// }
// mainFunction(exponentiation);


// 2

// const mainFunction = (multiplay) => {
//
//   const num1 = +prompt('enter the first number pls');
//   const num2 = +prompt('enter the second number pls');
//
//   multiplay(num1, num2)
// }
//
// const multiplay = (num1, num2) => {
//   const result = num1 * num2;
//   return alert(result)
// }
// mainFunction(multiplay);


//3

// const mainFunction = (division) => {
//   const num1 = +prompt('enter the first number pls');
//   const num2 = +prompt('enter the second number pls');
//
//   division(num1, num2);
// }
// const division = (num1, num2) => {
//   const result = num1 / num2;
//   return alert(result);
// }
//
// mainFunction(division);



//4
const mainFunction = (modulo) => {
  const num1 = +prompt('enter the first number pls');
  const num2 = +prompt('enter the second number pls');

  modulo(num1, num2)
}

const modulo = (num1, num2) => {
  const result = num1 % num2;
  return alert(result);
}
mainFunction(modulo);
