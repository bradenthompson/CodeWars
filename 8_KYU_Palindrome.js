// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let check = x.split('').reverse().join('')
    
    if (check.toLowerCase() === x.toLowerCase()){
      return true
    }
    else return false
  }