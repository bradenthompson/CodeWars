// DESCRIPTION:
// Functional closures can get overly attached. Set them straight!
// 
// Why doesn't greet_abe() actually greet Abe?

var greet_abe = function() {
    let name = 'Abe';
    return "Hello, " + name + '!';
  };
  
  ;
  var greet_ben = function() {
    let name2 = 'Ben'
    return "Hello, " + name2 + '!';
  };