export const InvalidLengthError = new Error('Password must be between 5 and 15 characters');

export const InvalidUpperCaseError = new Error('Password must contain at least one uppercase letter');

export const InvalidDigitError = new Error('Password must contain at least one digit');

export interface ResponseObject {
    valid: boolean;
    errors: PasswordError[];
}

type PasswordError = typeof InvalidLengthError | typeof InvalidUpperCaseError | typeof InvalidDigitError;

export class PasswordValidator {
    static validate(password: string): ResponseObject {
        return {
            valid: false,
            errors: [InvalidLengthError, InvalidUpperCaseError]
        }
    }
}