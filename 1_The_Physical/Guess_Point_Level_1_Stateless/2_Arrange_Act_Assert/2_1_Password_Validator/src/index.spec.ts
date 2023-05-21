import {InvalidLengthError, InvalidUpperCaseError, PasswordValidator, ResponseObject} from './index';

describe('password validator', () => {
    let responseObj: ResponseObject = {
        valid: false,
        errors: [InvalidLengthError, InvalidUpperCaseError]
    };
    it('should return an error if the password is too short', () => {
        expect(PasswordValidator.validate('1234')).toEqual(responseObj)
    })
})

