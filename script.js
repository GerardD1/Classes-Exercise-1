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
    constructor(balance, interestRate, fee) {
        super(this.fee);
    }
    applyFee() {
        this.balance - this.fee;
    }
}