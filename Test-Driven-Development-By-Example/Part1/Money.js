const VND = require('./VietnamDong.js')
const Dollar = require('./Dollar.js')

module.exports = class Money {

    static dollar(amount) {
        return new VND(amount);
    }

    constructor(amount){
        this.amount = amount;
    }

    times(muliplier){
        return new Money(this.amount * muliplier)
    }
 
    equals(money){
        const isTheSameClass = (this.constructor.name === money.constructor.name)
        const isTheSameAmount = this.amount === money.amount;
        return isTheSameAmount && isTheSameClass;
    }

}