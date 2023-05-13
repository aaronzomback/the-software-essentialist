export function isPalindrome(subject: string) {
  return subject.split("").reverse().join("") === subject;
}
