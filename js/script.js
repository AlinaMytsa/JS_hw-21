'use strict';

const mainFunction = (exponentiation) => {

  const number = +prompt('enter the number pls');
  const degree = +prompt('enter the degree pls');

  exponentiation(number,degree)
}

const exponentiation = (number, degree) => {
  const result = Math.pow(number, degree);
  return alert(result);
}
mainFunction(exponentiation);
