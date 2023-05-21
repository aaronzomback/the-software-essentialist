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
        responseObj = PasswordValidator.validate(input);
        expect(responseObj.valid).toEqual(false);
        expect(responseObj.errors.length).toBe(1);
        expect(responseObj.errors).toEqual([InvalidLengthError]);
      }
    );
    it.each(["maxwell1_c", "password1", "yoyo1", "supersecret2"])(
      "should return an error if the password does not contain an uppercase letter, i.e. %s",
      (input) => {
        responseObj = PasswordValidator.validate(input);
        expect(responseObj.valid).toEqual(false);
        expect(responseObj.errors.length).toBe(1);
        expect(responseObj.errors).toEqual([InvalidUpperCaseError]);
      }
    );
    it.each(["maxwellTheBe", "Mo".repeat(6), "Password", "SuperSecret"])(
      "should return an error if the password does not contain a digit, i.e. %s",
      (input) => {
        responseObj = PasswordValidator.validate(input);
        expect(responseObj.valid).toEqual(false);
        expect(responseObj.errors.length).toBe(1);
        expect(responseObj.errors).toEqual([InvalidDigitError]);
      }
    );
    it.each(["low", "yo", "kno"])(
      "should return multiple errors if the password is not valid for multiple criterias",
      (input) => {
        responseObj = PasswordValidator.validate(input);
        expect(responseObj.valid).toBe(false);
        expect(responseObj.errors.length).toBe(3);
        expect(responseObj.errors).toEqual([
          InvalidLengthError,
          InvalidUpperCaseError,
          InvalidDigitError,
        ]);
      }
    );
  });
  describe("when the password is valid", () => {
    it.each(["Maxwell1", "Password1", "SuperSecret2"])(
      "should return a valid response object for %s",
      (input) => {
        responseObj = PasswordValidator.validate(input);
        expect(responseObj.valid).toBe(true);
        expect(responseObj.errors.length).toBe(0);
      }
    );
  });
});
