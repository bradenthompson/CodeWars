// DESCRIPTION:
// Given an array of integers, return a new array with each value doubled.
// 
// For example:
// 
// [1, 2, 3] --> [2, 4, 6]

function maps(numbers){
    let doubled = new Array()
    for (i = 0; i < numbers.length; i++){
        doubled.push(numbers[i]*2)
    }
    return doubled
  }