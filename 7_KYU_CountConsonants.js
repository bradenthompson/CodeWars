// Description:
// 
// Complete the function that takes a string of English-language text and returns the number of consonants in the string.
// 
// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    const consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
    
    let counter = 0
    
    for (let letter of str.toLowerCase()){
      if (consonant.includes(letter)){
        counter ++
      }
    }
    return counter
  }