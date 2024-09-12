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
     * @param {string} accountNumber The account number to check 
     * @returns The account if it exists, otherwise undefined
     */
    private isAccountExists(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(acc => acc.accountNumber == accountNumber);
    }

    /**
     * This method creates a new account with the given name, age, and account number
     * @param {string} name the name of the account holder
     * @param {number} age the age of the account holder
     * @param {string} accountNumber unique account number of the account
     * @returns the created account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccExists = this.isAccountExists(accountNumber);
        if (isAccExists) {
            throw new Error("Account already exists!");
        }
        const account = {
            name, age, accountNumber, balance: 0
        };
        this.accounts.push(account);
        return account;
    }
}