export function isPalindrome(subject: string) {
  const normalizedInput = removeSpaces(subject).toLowerCase();
  return reverseString(normalizedInput) === normalizedInput;
}

const removeSpaces = (input: string) => input.split(" ").join("");
const reverseString = (input: string) => input.split("").reverse().join("");
