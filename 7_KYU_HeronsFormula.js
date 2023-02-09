// DESCRIPTION:
// Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

function heron(a, b, c) {
    let s = (a+b+c)/2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    
    return area;
  }