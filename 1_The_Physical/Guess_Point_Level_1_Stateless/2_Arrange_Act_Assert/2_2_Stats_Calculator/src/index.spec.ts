import { JukeboxMath, JukeboxResponse } from "./index";

describe("stats calculator", () => {
  describe("knows to validate an array of integer numbers", () => {
    it("should not throw an error if the array contains numbers", () => {
      expect(() => JukeboxMath.compute([1, 2, 3, 4, 5])).not.toThrow();
    });
    it("should throw an error if the array is empty", () => {
      expect(() => JukeboxMath.compute([])).toThrow();
    });
  });
  describe("it can calculate the minimum value", () => {
    it("should return 1 if the array contains [-2, -1, 0, 1, 2]", () => {
      // arrange
      let response: JukeboxResponse;

      // act
      response = JukeboxMath.compute([-2, -1, 0, 1, 2]);

      // assert
      expect(response.min).toBe(-2);
    });
  });
});
