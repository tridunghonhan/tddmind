module.exports = class Dollar{
    constructor(amount){
        this.amount = amount;
    }

    times(muliplier){
        return new Dollar(this.amount * muliplier)
    }

    equals(dollar){
        return this.amount === dollar.amount;
    }

}