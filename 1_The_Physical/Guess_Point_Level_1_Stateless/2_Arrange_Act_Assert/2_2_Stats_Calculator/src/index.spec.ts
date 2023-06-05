import { JukeboxMath } from "./index";

describe("stats calculator", () => {
  describe("should validate an array of integer numbers", () => {
    it("should not throw an error if the array contains numbers", () => {
      expect(() => JukeboxMath.compute([1, 2, 3, 4, 5])).not.toThrow();
    });
  });
});
