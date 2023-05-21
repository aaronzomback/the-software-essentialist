import {
  InvalidDigitError,
  InvalidLengthError,
  InvalidUpperCaseError,
  PasswordValidator,
  ResponseObject,
} from "./index";

describe("password validator", () => {
  let responseObj: ResponseObject;
  describe("when the password is not valid", () => {
    it.each(["thePhysical1234567", "Ho2", "Mo1", "Mo1".repeat(6)])(
      "should should return an error if the password length is not between 5 or 15 characters, i.e. %s",
      (input) => {
        responseObj = {
          valid: false,
          errors: [InvalidLengthError],
        };
        expect(PasswordValidator.validate(input)).toEqual(responseObj);
      }
    );
    it.each(["maxwell1_c", "password1", "yoyo1", "supersecret2"])(
      "should return an error if the password does not contain an uppercase letter, i.e. %s",
      (input) => {
        responseObj = {
          valid: false,
          errors: [InvalidUpperCaseError],
        };
        expect(PasswordValidator.validate(input)).toEqual(responseObj);
      }
    );
    it.each(["maxwellTheBe", "Mo".repeat(6), "Password", "SuperSecret"])(
      "should return an error if the password does not contain a digit, i.e. %s",
      (input) => {
        responseObj = {
          valid: false,
          errors: [InvalidDigitError],
        };
        expect(PasswordValidator.validate(input)).toEqual(responseObj);
      }
    );
    it.each(["low", "yo", "kno"])(
      "should return multiple errors if the password is not valid for multiple criterias",
      (input) => {
        responseObj = {
          valid: false,
          errors: [
            InvalidLengthError,
            InvalidUpperCaseError,
            InvalidDigitError,
          ],
        };
        expect(PasswordValidator.validate(input)).toEqual(responseObj);
      }
    );
  });
  describe("when the password is valid", () => {
    it("should return a valid response object", () => {
      responseObj = PasswordValidator.validate("Maxwell1");
      expect(responseObj.valid).toBe(true);
      expect(responseObj.errors.length).toBe(0);
    });
  });
});
