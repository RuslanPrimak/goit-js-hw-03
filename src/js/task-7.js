'use strict';

console.log('========================= Task 7 =========================');

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    this.transactions.push({ id: this.transactions.length + 1, type, amount });
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.balance -= amount;
    this.createTransaction(amount, Transaction.WITHDRAW);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    return this.transactions[id - 1];
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let balance = 0;
    for (const transation of this.transactions) {
      if (transation.type === type) {
        balance += transation.amount;
      }
    }
    return balance;
  },
};

// Проверка результата
console.log(`Initial balance: ${account.getBalance()}`);

const logDeposit = function (sum) {
  account.deposit(sum);
  console.log(`Deposit: ${sum}, New balance: ${account.getBalance()}`);
};

const logWithdraw = function (sum) {
  account.withdraw(sum);
  console.log(`Withdraw: ${sum}, New balance: ${account.getBalance()}`);
};

logDeposit(100);
logDeposit(150);
logDeposit(250);
logWithdraw(50);
logWithdraw(150);
logDeposit(100); //400
