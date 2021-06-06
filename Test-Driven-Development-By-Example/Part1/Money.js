module.exports = class Money {
    constructor(amount){
        this.amount = amount;
    }

    times(muliplier){
        return new Money(this.amount * muliplier)
    }

    equals(money){
        return this.amount === money.amount;
    }

}