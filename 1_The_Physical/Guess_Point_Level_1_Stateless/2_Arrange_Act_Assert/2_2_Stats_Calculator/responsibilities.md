# Responsibilities

> Note: should not use any System Math library functions

## Takes in a sequence of integers

it knows that [-1, 0, 1] is valid
it knows that [-1, 0, 0.5, 1] is not valid

## Finds the min value of the sequence

it knows that MIN is -3 in [-2, 0, -3]

## Finds the max value of the sequence

it knows that MAX is -3 in [-5, -6, -3]

## Computes the number of elements in the sequence

it knows that the number is 4 in [-3, -1, 0, 1]

## Computes the average of the elements in the sequence

it knows that the AVG of [6, 3, 2] is 3.666666666667

## Returns 'JukeboxMath' result object that conforms to expected results

it knows that an input of [6, 3, 2] results in a return response:
{
min: 2,
max: 6,
elements: 3
avg: 3.666666666667
}
