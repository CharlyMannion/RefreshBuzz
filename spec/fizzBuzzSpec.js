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
      })
  });
  
})