interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

/**
 * This class represents a simple bank with the ability to create new accounts.
 */
export default class Bank {
    private accounts: BankAccount[] = [];

    /**
     * Finds and returns the bank account with the given account number
     * @param {string} accountNumber The account number to find
     * @returns The account if it exists, otherwise undefined
     */
    private findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(acc => acc.accountNumber == accountNumber);
    }

    /**
     * Finds and returns the bank account with the given account number. If no such account exists,
     * an error is thrown.
     * @param accountNumber The account number to find 
     * @returns The account
     */
    private requireAccount(accountNumber: string): BankAccount {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error(`Bank account with accountNumber=${accountNumber} does not exist!`);
        }
        return account;
    }
    /**
     * This method creates a new account with the given name, age, and account number
     * @param {string} name the name of the account holder
     * @param {number} age the age of the account holder
     * @param {string} accountNumber unique account number of the account
     * @returns the created account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const existingAccount = this.findAccount(accountNumber);
        if (existingAccount) {
            throw new Error("Account already exists!");
        }
        const account = {
            name, age, accountNumber, balance: 0
        };
        this.accounts.push(account);
        return account;
    }

    /**
     * This method deposits a given amount into a bank account
     * @param {string} accountNumber The account number to deposit into
     * @param {number} amount The amount of money to deposit
     * @returns The new balance 
     */
    public deposit(accountNumber: string, amount: number): number {
        if (amount < 0) {
            throw new Error("Cannot deposit a negative amount!");
        }
        const account = this.requireAccount(accountNumber);
        account.balance += amount;
        return account.balance;
    }
}