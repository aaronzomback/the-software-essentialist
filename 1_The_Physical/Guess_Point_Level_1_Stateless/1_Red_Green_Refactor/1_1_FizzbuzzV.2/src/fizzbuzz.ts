export const fizzbuzz = (n: number): string => {
    if (typeof n !== "number") throw NonNumberTypeError
    if (n < 1 || n > 100) throw NumberOutOfBoundsError
    if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz" // this must be first because it is more specific than the other two (i.e. 15 is a multiple of 3 and 5, but it is also a multiple of 3 and 5
    if (n % 3 === 0) return "Fizz"
    if (n % 5 === 0) return "Buzz"
    return n.toString()
}

export const NumberOutOfBoundsError = new Error("Input must be a number between 1 and 100 inclusive");

export const NonNumberTypeError = new Error("Input must be of type number");