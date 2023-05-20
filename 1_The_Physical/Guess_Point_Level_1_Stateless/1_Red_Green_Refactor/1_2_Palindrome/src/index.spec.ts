import { isPalindrome } from "./index";

describe("palindrome checker", () => {
  it("should be defined", () => {
    expect(isPalindrome).toBeDefined();
  });
  describe("single words same case", () => {
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
      "radar",
      "stats",
      "tenet",
      "wow",
    ])("should know that %s is a palindrome", (subject) => {
      expect(isPalindrome(subject)).toBe(true);
    });
    it.each([
      "happy",
      "doodoo",
      "holistic",
      "approach",
      "yuppy",
      "nothing",
      "petulance",
      "olympic",
      "marry",
      "exuberant",
      "contagious",
      "livid",
      "horror",
      "dramatic",
    ])("should know that %s isn't a palindrome", (subject) => {
      expect(isPalindrome(subject)).toBe(false);
    });
  });
  describe("single words mixed case", () => {
    it.each([
      "Racecar",
      "Mom",
      "Dad",
      "Noon",
      "Madam",
      "Civic",
      "Kayak",
      "Level",
      "Rotor",
      "Radar",
      "Stats",
      "Tenet",
      "Wow",
      "xMomx",
      "Mom",
    ])("should know that %s is a palindrome", (subject) => {
      expect(isPalindrome(subject)).toBe(true);
    });
    it.each([
      "Happy",
      "Doodoo",
      "Holistic",
      "Approach",
      "Yuppy",
      "Nothing",
      "Petulance",
      "Olympic",
      "Marry",
      "Exuberant",
      "Contagious",
      "Livid",
      "Horror",
      "Dramatic",
      "Momx",
    ])("should know that %s isn't a palindrome", (subject) => {
      expect(isPalindrome(subject)).toBe(false);
    });
  });
  describe("phrases with spaces", () => {
    it.each([
      "Was It A Rat I Saw",
      "Never Odd or Even",
      "1Never Odd or Even1",
      "Was  it A Rat I saw",
    ])("should know that %s is a palindrome", (subject) => {
      expect(isPalindrome(subject)).toBe(true);
    });
    it.each(["Never Odd or Even1"])(
      "should know that %s isn't a palindrome",
      (subject) => {
        expect(isPalindrome(subject)).toBe(false);
      }
    );
  });
});
