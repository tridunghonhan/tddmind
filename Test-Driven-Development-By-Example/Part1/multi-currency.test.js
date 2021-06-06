const Dollar = require('./Dollar')
const Franc = require('./Franc')

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

test('Chapter 4: Privacy. Test multiplication', ()=>{
    let five = new Dollar(5);
    expect(new Dollar(10)).toEqual(five.times(2))
    expect(new Dollar(15)).toEqual(five.times(3))
})

test('Chapter 5: Franc-ly speaking.', ()=>{
    let five = new Franc(5);
    expect(new Franc(10)).toEqual(five.times(2))
    expect(new Franc(15)).toEqual(five.times(3))

    expect(new Franc(2)).toEqual(new Franc(2))
    expect(new Franc(3)).not.toEqual(new Franc(2))


})

