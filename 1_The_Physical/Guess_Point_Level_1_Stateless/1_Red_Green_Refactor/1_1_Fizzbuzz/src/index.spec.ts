import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  describe("takes numbers from 1 to 100", () => {
    it("knows that 1 is a valid input because it's between 1 & 100", () => {
      expect(() => fizzbuzz(1)).not.toThrow();
    });
    it("knows that 100 is a valid input because it's between 1 & 100", () => {
      expect(() => fizzbuzz(100)).not.toThrowError();
    });
    it("knows that 0 is an invalid input because it's NOT between 1 & 100", () => {
      expect(() => fizzbuzz(0)).toThrowError(
        "Number must be between 1 to 100 inclusive."
      );
    });
    it("knows that 101 is an invalid input because it's NOT between 1 & 100", () => {
      expect(() => fizzbuzz(101)).toThrowError(
        "Number must be between 1 to 100 inclusive."
      );
    });
  });
  describe("returns the number (as a string) if it's not a multiple of 3 or 5", () => {
    it("returns 1 if 1 is passed in", () => {
      expect(fizzbuzz(1)).toBe("1");
    });
    it("returns 7 if 7 is passed in", () => {
      expect(fizzbuzz(7)).toBe("7");
    });
    it("returns 98 if 98 is passed in", () => {
      expect(fizzbuzz(98)).toBe("98");
    });
  });
  describe("returns 'Fizz' if the number is a multiple of 3", () => {
    it("returns 'Fizz' if 3 is passed in", () => {
      expect(fizzbuzz(3)).toBe("Fizz");
    });
    it("returns 'Fizz' if 6 is passed in", () => {
      expect(fizzbuzz(6)).toBe("Fizz");
    });
    it("returns 'Fizz' if 27 is passed in", () => {
      expect(fizzbuzz(27)).toBe("Fizz");
    });
  });
  describe("returns 'Buzz' if the number is a multiple of 5", () => {
    it("returns 'Buzz' if 5 is passed in", () => {
      expect(fizzbuzz(5)).toBe("Buzz");
    });
    it("returns 'Buzz' if 10 is passed in", () => {
      expect(fizzbuzz(10)).toBe("Buzz");
    });
    it("returns 'Buzz' if 50 is passed in", () => {
      expect(fizzbuzz(50)).toBe("Buzz");
    });
  });
  describe("returns 'FizzBuzz' if the number is a multiple of 3 and 5", () => {
    it("returns 'FizzBuzz' if 15 is passed in", () => {
      expect(fizzbuzz(15)).toBe("FizzBuzz");
    });
    it("returns 'FizzBuzz' if 30 is passed in", () => {
      expect(fizzbuzz(30)).toBe("FizzBuzz");
    });
    it("returns 'FizzBuzz' if 90 is passed in", () => {
      expect(fizzbuzz(90)).toBe("FizzBuzz");
    });
  });
});
