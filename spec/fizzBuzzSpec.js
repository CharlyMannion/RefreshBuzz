describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
      fizzBuzz = new FizzBuzz();
  });

  describe("multiples of three", function() {
    it("returns Fizz when the number is 3", function() {
        expect(fizzBuzz.play(3)).toEqual('Fizz');
      });
    it("returns Fizz when the number is a multiple of 3", function() {
        expect(fizzBuzz.play(6)).toEqual('Fizz');
    });
  });

  describe("multiples of five", function() {
      it("returns Buzz when the number is 5", function() {
          expect(fizzBuzz.play(5)).toEqual('Buzz');
      });
      it("returns Buzz when the number is a multiple of 5", function() {
          expect(fizzBuzz.play(40)).toEqual('Buzz');
      });
  });

  describe("multiples of five and three", function() {
      it("returns FizzBuzz when the number is fifteen", function() {
          expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
      });
  });
  
})