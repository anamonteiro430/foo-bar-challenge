const fooBar = require('./fooBar');

describe('fooBar is working correctly', () => {
     const log = jest.spyOn(global.console, 'log');

     fooBar()
     test('should log 100 times', () => {
          expect(log).toHaveBeenCalledTimes(100);
     });

     test("should log correct word or number", () => {
          for (let number = 1; number < 100 + 1; number++) {
               const value = number % 3 === 0 && number % 5 === 0 ?
               "FooBar" : number % 3 === 0 ? 
               "Foo" : number % 5 === 0 ? 
               "Bar" : number
               expect(log).toHaveBeenNthCalledWith(number, value)
          }
     })
}); 