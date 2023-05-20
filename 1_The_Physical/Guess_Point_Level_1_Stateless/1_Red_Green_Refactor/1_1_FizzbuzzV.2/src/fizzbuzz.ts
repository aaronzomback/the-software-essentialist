export const fizzbuzz = (n: number): string => {
    if (n < 1 || n > 100) throw numberOutofBoundsError
    return n.toString()
}

const numberOutofBoundsError = new Error("Input must be a number between 1 and 100 inclusive")