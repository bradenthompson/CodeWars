// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.
// 
// Note: Empty arrays should return 0.

function findAverage(array) {
    const average = array.reduce( (acc,c) => acc + c, 0)/array.length
    if (average >= 1) {
      return average}
    else return 0
  }