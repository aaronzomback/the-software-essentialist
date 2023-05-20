export const fizzbuzz = (n: number): string => {
    if (n < 1 || n > 100) throw numberOutofBoundsError
    if (n % 3 === 0) return "Fizz"
    if (n % 5 === 0) return "Buzz"
    return n.toString()
}

const numberOutofBoundsError = new Error("Input must be a number between 1 and 100 inclusive")