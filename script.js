class BankAccount {
    constructor(balance, interestRate) {
        this.balance = balance;
        this.interestRate = interestRate;
    }
    addInterest() {
        this.balance ++ this.interestRate;
    }
}

class BankAccountWithFee extends BankAccount {
    this.fee = 5.00;
    applyFee() {
        this.balance - this.fee;
    }
}