export function isPalindrome(subject: string) {
  const normalizedInput = subject.toLowerCase();
  return normalizedInput.split("").reverse().join("") === normalizedInput;
}
