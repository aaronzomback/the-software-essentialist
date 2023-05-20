import { fizzbuzz } from "./fizzbuzz";

describe('fizzbuzz', () => {
    describe("takes numbers from 1 to 100 and outputs them as a string", () => {
        it("returns '1' when given 1", () => {
        expect(fizzbuzz(1)).toBe("1")
        })
        it("returns '2' when given 2", () => {
        expect(fizzbuzz(2)).toBe("2")
        })
        it("returns '100' when given 100", () => {
            expect(fizzbuzz(100)).toBe("100")
        })
    });
    describe('gracefully handles out-of-bound numbers below 1 and above 100', () => {
        it("returns 'Error' with message: 'Input must be a number between 1 and 100 inclusive', when given 0", () => {
          expect(() => fizzbuzz(0)).toThrowError(
            "Input must be a number between 1 and 100 inclusive"
          );
        });
        it("returns 'Error' with message: 'Input must be a number between 1 and 100 inclusive', when given 0", () => {
            expect(() => fizzbuzz(101)).toThrowError(
                "Input must be a number between 1 and 100 inclusive"
          );
        });
    })
    describe('returns "Fizz" when given a multiple of 3', () => {
        expect(fizzbuzz(3)).toBe("Fizz")
    })
})