'use strict';

console.log('========================= Task 4 =========================');

const countTotalSalary = function (employees) {
  return Object.values(employees).reduce((a, b) => a + b, 0);
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
