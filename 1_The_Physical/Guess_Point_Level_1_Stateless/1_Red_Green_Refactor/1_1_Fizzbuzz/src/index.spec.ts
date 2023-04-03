import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("takes numbers from 1 to 100", () => {
    expect(() => fizzbuzz(1)).not.toThrow();
    expect(() => fizzbuzz(100)).not.toThrowError();
    expect(() => fizzbuzz(0)).toThrowError(
      "Number must be between 1 to 100 inclusive."
    );
    expect(() => fizzbuzz(101)).toThrowError(
      "Number must be between 1 to 100 inclusive."
    );
  });
});
