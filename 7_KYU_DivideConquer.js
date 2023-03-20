// DESCRIPTION:
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.

function divCon(x){
    let num = 0
    let str = 0
    
    x.forEach((int) => {
      if (typeof int == 'number') {
        num += int;
      } else if (typeof int == 'string') {
        str += Number(int);
      }
    })
    return num - str;
  }