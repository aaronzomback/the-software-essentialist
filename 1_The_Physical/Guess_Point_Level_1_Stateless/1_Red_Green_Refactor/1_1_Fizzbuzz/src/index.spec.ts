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
});
