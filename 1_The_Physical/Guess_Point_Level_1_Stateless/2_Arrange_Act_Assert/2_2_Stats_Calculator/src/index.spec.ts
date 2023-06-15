import { JukeboxMath, JukeboxResponse } from "./index";

describe("stats calculator", () => {
  describe("knows to validate an array of integer numbers", () => {
    it("should not throw an error if the array contains numbers", () => {
      expect(() => JukeboxMath.compute([1, 2, 3, 4, 5])).not.toThrow();
    });

    it("should throw an error if the array is empty", () => {
      expect(() => JukeboxMath.compute([])).toThrow();
    });
    it("should throw an error if the array is contains a non-integer number", () => {
      expect(() => JukeboxMath.compute([Infinity, 1, 2])).toThrow();
    });
  });
  describe("it can calculate the minimum value", () => {
    it.each([
      [[-2, -1, 0, 1, 2], -2],
      [[3, 7, 2], 2],
      [[42, -212, 0, -1], -212],
    ])(
      "computes the min value of %p expecting %p",
      (numbers: number[], expectedMin: number) => {
        const { min } = JukeboxMath.compute(numbers);
        expect(min).toEqual(expectedMin);
      }
    );
  });
  describe("it can calculate the maximum value", () => {
    it.each([
      [[-2, -1, 0, 1, 2], 2],
      [[3, 7, 2], 7],
      [[42, -212, 0, 42, -42], 42],
    ])(
      "computes the max value of %p expecting %p",
      (numbers: number[], expectedMax: number) => {
        const { max } = JukeboxMath.compute(numbers);
        expect(max).toEqual(expectedMax);
      }
    );
  });
  describe("it can calculate the average value", () => {
    it.each([
      [[-2, -1, 0, 1, 2], 0],
      [[3, 7, 2], 4],
      [[42, -212, 0, -1], -42.75],
    ])(
      "computes the average value of %p expecting %p",
      (numbers: number[], expectedAvg: number) => {
        const { avg } = JukeboxMath.compute(numbers);
        expect(avg).toEqual(expectedAvg);
      }
    );
  });
  describe("it can calculate the number of elements", () => {
    it.each([
      [[-2, -1, 0, 1, 2], 5],
      [[3, 7, 2], 3],
      [[42, -212, 0, -1], 4],
    ])(
      "computes the total number of elements in %p expecting %p",
      (numbers: number[], expectedElements: number) => {
        const { elements } = JukeboxMath.compute(numbers);
        expect(elements).toEqual(expectedElements);
      }
    );
  });
});
