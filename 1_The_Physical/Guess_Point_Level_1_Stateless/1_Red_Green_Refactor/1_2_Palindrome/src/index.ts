export function isPalindrome(subject: string) {
  const normalizedInput = subject.toLowerCase().split(" ").join("");
  return (
    normalizedInput.split(" ").join("").split("").reverse().join("") ===
    normalizedInput
  );
}
