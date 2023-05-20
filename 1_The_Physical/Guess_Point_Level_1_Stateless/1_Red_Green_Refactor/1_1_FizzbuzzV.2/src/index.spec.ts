import { NonNumberTypeError, NumberOutOfBoundsError, fizzbuzz } from "./fizzbuzz";

describe('fizzbuzz', () => {
    describe("takes numbers from 1 to 100 and outputs them as a string", () => {
        it.each([[1, "1"], [2, "2"], [2.6, "2.6"], [4, "4"], [7, "7"], [11, "11"], [13, "13"], [17, "17"], [98, "98"]])("when given %s it returns '%s'", (input, expected) => {
            expect(fizzbuzz(input)).toBe(expected)
        })
    });
    describe('gracefully handles out-of-bound numbers below 1 and above 100', () => {
        it.each([0, 101, -12, 102, -34, -5, -3, -9, 115, 112])("when given %s it throws an error", (input) => {
            expect(() => fizzbuzz(input)).toThrowError(NumberOutOfBoundsError.message)
        })
    })
    describe('returns "Fizz" when given a multiple of 3', () => {
        it.each([[3, "Fizz"], [6, "Fizz"], [9, "Fizz"], [12, "Fizz"], [18, "Fizz"], [21, "Fizz"], [24, "Fizz"], [27, "Fizz"], [33, "Fizz"], [36, "Fizz"], [39, "Fizz"], [42, "Fizz"], [48, "Fizz"], [51, "Fizz"], [54, "Fizz"], [57, "Fizz"], [63, "Fizz"], [66, "Fizz"], [69, "Fizz"], [72, "Fizz"], [78, "Fizz"], [81, "Fizz"], [84, "Fizz"], [87, "Fizz"], [93, "Fizz"], [96, "Fizz"], [99, "Fizz"]])("when given %s it returns '%s'", (input, expected) => {
            expect(fizzbuzz(input)).toBe(expected)
        })
    })
    describe('returns "Buzz" when given a multiple of 5', () => {
        it.each([[5, "Buzz"], [10, "Buzz"], [20, "Buzz"], [25, "Buzz"], [35, "Buzz"], [40, "Buzz"], [50, "Buzz"], [55, "Buzz"], [65, "Buzz"], [70, "Buzz"], [80, "Buzz"], [85, "Buzz"], [95, "Buzz"], [100, "Buzz"]])("when given %s it returns '%s'", (input, expected) => {
            expect(fizzbuzz(input)).toBe("Buzz")
        })
    })
    describe('returns "FizzBuzz" when given a multiple of 3 and 5', () => {
        it.each([[15, "FizzBuzz"], [30, "FizzBuzz"], [45, "FizzBuzz"], [60, "FizzBuzz"], [75, "FizzBuzz"], [90, "FizzBuzz"], [90, "FizzBuzz"]])("when given %s it returns '%s'", (input, expected) => {
            expect(fizzbuzz(input)).toBe(expected)
        })
    })
    describe('gracefully handles non-numbers', () => {
        it("when given a string it throws an error", () => {
            expect(() => fizzbuzz("string" as any)).toThrowError(NonNumberTypeError.message)
        })
        it("when given an array it throws an error", () => {
           expect(() => fizzbuzz([] as any)).toThrowError(NonNumberTypeError.message);
         });
        it("when given a boolean it throws an error", () => {
          expect(() => fizzbuzz(true as any)).toThrowError(NonNumberTypeError.message);
        });                   
    })
})