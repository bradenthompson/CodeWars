// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).
// 
// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let strSplit = s.split(' ');
    let shortestWord = strSplit[0].length;
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length < shortestWord){
      shortestWord = strSplit[i].length;
       }
    }
    return shortestWord;
  }