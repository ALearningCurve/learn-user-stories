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



// Withdraw: scenario 1
const postWithdrawBalance = bank.withdraw(acc.accountNumber, 50);
Assert.equal(postWithdrawBalance, 5450, "Withdraw - scenario 1");

// Withdraw: scenario 2
const badWithdrawNegativeFunc = () => bank.withdraw(acc.accountNumber, -1);
Assert.shouldError(badWithdrawNegativeFunc, "Withdraw - scenario 2");

// Withdraw: scenario 3
const badWithdrawNonExistentAccountFunc = () => bank.withdraw("foobar", 50);
Assert.shouldError(badWithdrawNonExistentAccountFunc, "Withdraw - scenario 3");

// Withdraw: scenario 4
// current account balance is 5450, so 5500 is too large of a withdrawal and should error
const badWithdrawTooLargeFunc = () => bank.withdraw(acc.accountNumber, 5500);
Assert.shouldError(badWithdrawTooLargeFunc, "Withdraw - scenario 4");



// Check account balance: scenario 1
const balanceCheckBalance = bank.checkAccountBalance(acc.accountNumber);
Assert.equal(balanceCheckBalance, 5450, "Check account balance - scenario 1");

// Check account balance: scenario 2
const badCheckAccountBalanceNonExistentAccountFunc = () => bank.checkAccountBalance("foobar");
Assert.shouldError(badCheckAccountBalanceNonExistentAccountFunc, "Check account balance - scenario 2");