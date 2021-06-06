let Money = require('./Money');

module.exports = class Franc extends Money{
    constructor(amount){
        super(amount);
    }
}