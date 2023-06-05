# Responsibilities

## Validate between 5-15 characters in length
    it knows that 'mommm' is in the range
    it knows that 'foo' is not in the range
    it knows that 'hellothisisastring' is not in the range
## Validate that the input contains atleast 1 digit
    it knows that 'mommm1' is valid
    it knows that 'mommm' is not valid
## Validate that the input also contains atleast 1 uppercase character
    it knows that 'Mommm1' is valid
    it knows that 'mommm1' is not valid
## Returns the correct object shape that responds to any present errors
    it should return {
        valid: false
        errors: [{
            name: InvalidLengthError
            message: "Passwords must be between 5 and 15 characters in length"
          }] for input "Mom1"
        }
    it should return {
        valid: false
          errors: [{
            name: DigitError
            message: "Passwords must contain atleast 1 digit"
          }] for input "Mommm"
        }
    it should return {
        valid: false
          errors: [{
            name: UppercaseError
            message: "Passwords must contain atleast 1 uppercase"
          }] for input "mommm1"
        }
    it should return {
        valid: true
          errors: [] for input "Mommm1"
        } 