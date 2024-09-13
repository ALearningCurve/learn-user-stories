import Bank from '../src/bank';
import Assert from "./testUtils";

// Account creation: scenario 1
const bank = new Bank();

const acc = bank.createAccount("Jane Doe", 25, "123456");
Assert.equal(acc.accountNumber, "123456", "Account creation - scenario 1");

// Account creation: scenario 2
const badAccountCreationFunc = () => bank.createAccount("Jane Doe", 25, "123456");
Assert.shouldError(badAccountCreationFunc, "Account creation - scenario 2");

// Deposit: scenario 1
const postDepositBalance = bank.deposit(acc.accountNumber, 5500);
Assert.equal(postDepositBalance, 5500, "Deposit - scenario 1");

// Deposit: scenario 2
const badDepositNegativeFunc = () => bank.deposit(acc.accountNumber, -1);
Assert.shouldError(badDepositNegativeFunc, "Deposit - scenario 2");

// Deposit: scenario 3
const badDepositNonExistentAccountFunc = () => bank.deposit("foobar", -1);
Assert.shouldError(badDepositNonExistentAccountFunc, "Deposit - scenario 3");