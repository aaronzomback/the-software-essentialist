export const fizzbuzz = (number: number) => {
  if (number < 1 || number > 100)
    throw new Error("Number must be between 1 to 100 inclusive.");
  if (!(number % 3 === 0 || number % 5 === 0)) return number.toString();
  if (number % 3 === 0 && number % 5 !== 0) return "Fizz";
  if (number % 5 === 0 && number % 3 !== 0) return "Buzz";
  if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
};
