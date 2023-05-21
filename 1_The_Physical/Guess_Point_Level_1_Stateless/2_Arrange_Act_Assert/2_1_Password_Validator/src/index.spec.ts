import {InvalidLengthError, InvalidUpperCaseError, PasswordValidator, ResponseObject} from './index';

describe('password validator', () => {
        let responseObj: ResponseObject
    describe('when the password is not valid', () => {
        it('should return an error if the password does not contain an uppercase letter', () => {
            responseObj = {
            valid: false,
            errors: [InvalidUpperCaseError]
        };
            expect(PasswordValidator.validate('password1')).toEqual(responseObj)
        })
        it('should return an error if the password is too short', () => {
            responseObj = {
                valid: false,
                errors: [InvalidLengthError]
            }
            expect(PasswordValidator.validate('Mo1')).toEqual(responseObj)
        })
        it('should return an error if the password is too long', (
        ) => {
            responseObj = {
                valid: false,
                errors: [InvalidLengthError]
            }
            expect(PasswordValidator.validate('Mo1'.repeat(6))).toEqual(responseObj)
        })
    })
})

