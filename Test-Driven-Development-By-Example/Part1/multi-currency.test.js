const Dollar = require('./Dollar')

test('5 dollars * 2 equal 10', () => {
    let five = new Dollar(5);
    let product = five.times(2)
    expect(product.amount).toBe(10);
    product = five.times(3)
    expect(product.amount).toBe(15);
});

test('Chapter 3: Equality for all', () => {
    let five = new Dollar(5);
    let anotherFive = new Dollar(5);
    expect(five.equals(anotherFive)).toBe(true);
    let six = new Dollar(6);
    expect(five.equals(six)).toBe(false);
});
