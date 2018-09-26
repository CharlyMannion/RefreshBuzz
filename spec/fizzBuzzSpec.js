describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
      fizzBuzz = new FizzBuzz();
  });

  describe("multiples of three", function() {
    it("returns Fizz when the number is 3", function() {
        expect(fizzBuzz.play(3)).toEqual('Fizz');
      });
  });
  
})