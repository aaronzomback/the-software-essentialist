import { isPalindrome } from "./index";

describe("palindrome checker", () => {
  it("should be defined", () => {
    expect(isPalindrome).toBeDefined();
  });

  it.each([
    "racecar",
    "mom",
    "dad",
    "noon",
    "madam",
    "civic",
    "kayak",
    "level",
    "rotor",
    "stats",
    "tenet",
    "wow",
  ])("should return true for %s", (subject) => {
    expect(isPalindrome(subject)).toBe(true);
  });
});
