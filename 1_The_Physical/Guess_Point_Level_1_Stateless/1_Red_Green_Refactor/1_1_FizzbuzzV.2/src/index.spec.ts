import { fizzbuzz } from "./fizzbuzz";

describe('fizzbuzz', () => {
    describe("takes numbers from 1 to 100 and outputs them as a string", () => {
        it("returns '1' when given 1", () => {
        expect(fizzbuzz(1)).toBe("1")
        })
        it("returns '2' when given 2", () => {
        expect(fizzbuzz(2)).toBe("2")
        })
    });
})