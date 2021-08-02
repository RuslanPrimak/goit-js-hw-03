'use strict';

console.log('========================= Task 3 =========================');

const findBestEmployee = function (employees) {
  var user;
  var rate = 0;
  for (const key of Object.keys(employees)) {
    if (employees[key] > rate) {
      rate = employees[key];
      user = key;
    }
  }
  return user;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
