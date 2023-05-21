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
        let errors: PasswordError[] = [];
        if (password.length < 5 || password.length > 15) {
            errors.push(InvalidLengthError);
        }
        if (!/[A-Z]/.test(password)) {
            errors.push(InvalidUpperCaseError);
        }
        return {
            valid: errors.length === 0,
            errors: errors
        }
    }
}