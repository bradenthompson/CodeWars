// DESCRIPTION:
// Your Job
// Find the sum of all multiples of n below m
// 
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

function sumMul(n,m){
    if (n >= m) return "INVALID";
  
  var sum = 0;
    for (var i = n; i < m; i+=n) {
      sum += i;
    }
    return sum;
  }