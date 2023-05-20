import { fizzbuzz } from "./fizzbuzz";

describe('fizzbuzz', () => {
    describe("takes numbers from 1 to 100 and outputs them as a string", () => {
        it("returns '1' when given 1", () => {
        expect(fizzbuzz(1)).toBe("1")
        })
        it("returns '2' when given 2", () => {
        expect(fizzbuzz(2)).toBe("2")
        })
        it("returns '98' when given 98", () => {
            expect(fizzbuzz(98)).toBe("98")
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
        it("returns 'Fizz' when given 3", () => {
            expect(fizzbuzz(3)).toBe("Fizz")
        })
        it("returns 'Fizz' when given 6", () => {
            expect(fizzbuzz(6)).toBe("Fizz")
        })
        it("returns 'Fizz' when given 99", () => {
            expect(fizzbuzz(99)).toBe("Fizz")
        })
    })
    describe('returns "Buzz" when given a multiple of 5', () => {
        it("returns 'Buzz' when given 5", () => {
            expect(fizzbuzz(5)).toBe("Buzz")
        })
        it("returns 'Buzz' when given 10", () => {
            expect(fizzbuzz(10)).toBe("Buzz")
        })
        it("returns 'Buzz' when given 100", () => {
            expect(fizzbuzz(100)).toBe("Buzz")
        })
    })
    describe('returns "FizzBuzz" when given a multiple of 3 and 5', () => {
        it("returns 'FizzBuzz' when given 15", () => {
            expect(fizzbuzz(15)).toBe("FizzBuzz")
        })
    })
})