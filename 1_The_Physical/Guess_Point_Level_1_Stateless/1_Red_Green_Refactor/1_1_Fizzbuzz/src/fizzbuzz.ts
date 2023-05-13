export const fizzbuzz = (number: number) => {
  validateNumberInput(number);
  if (!isMultitpleOf3or5(number)) return number.toString();
  if (isOnlyMultipleOf3(number)) return "Fizz";
  if (isOnlyMultipleOf5(number)) return "Buzz";
  if (isMultipleOf3and5(number)) return "FizzBuzz";
};

const validateNumberInput = (number: number) => {
  if (number < 1 || number > 100)
    throw new Error("Number must be between 1 to 100 inclusive.");
};

const isMultitpleOf3or5 = (number: number) => {
  return number % 3 === 0 || number % 5 === 0;
};

const isOnlyMultipleOf3 = (number: number) => {
  return number % 3 === 0 && number % 5 !== 0;
};

const isOnlyMultipleOf5 = (number: number) => {
  return number % 5 === 0 && number % 3 !== 0;
};

const isMultipleOf3and5 = (number: number) => {
  return number % 3 === 0 && number % 5 === 0;
};
