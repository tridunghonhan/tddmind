let Money = require('./Money');

module.exports = class Dollar extends Money{
    constructor(amount){
        super(amount)
    }
}