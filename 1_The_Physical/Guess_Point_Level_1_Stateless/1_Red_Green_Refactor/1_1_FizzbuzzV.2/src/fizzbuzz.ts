export const fizzbuzz = (n: number): string => {
    if (typeof n !== "number") throw NonNumberTypeError
    if (n < 1 || n > 100) throw NumberOutOfBoundsError
    if (isMultipleOfThreeAndFive(n)) return "FizzBuzz" // this must be first because it is more specific than the other two (i.e. 15 is a multiple of 3 and 5, but it is also a multiple of 3 and 5
    if (isMultipleOfThree(n)) return "Fizz"
    if (isMultipleOfFive(n)) return "Buzz"
    return n.toString()
}

export const NumberOutOfBoundsError = new Error("Input must be a number between 1 and 100 inclusive");

export const NonNumberTypeError = new Error("Input must be of type number");

const isMultipleOfThree = (n: number): boolean => n % 3 === 0
const isMultipleOfFive = (n: number): boolean => n % 5 === 0
const isMultipleOfThreeAndFive = (n: number): boolean => isMultipleOfThree(n) && isMultipleOfFive(n)