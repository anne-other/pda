var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add', function () {
    calculator.previousTotal = 4;
    calculator.add(1);
    total = parseFloat(calculator.runningTotal);
    assert.strictEqual(total, 5);
  })

  it('should subtract', function () {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    total = parseFloat(calculator.runningTotal);
    assert.strictEqual(total, 3);
  })

  it('should multiply', function () {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    total = parseFloat(calculator.runningTotal);
    assert.strictEqual(total, 15);
  })

  it('should divide', function () {
    calculator.previousTotal = 21;
    calculator.divide(7);
    total = parseFloat(calculator.runningTotal);
    assert.strictEqual(total, 3);
  })

});
