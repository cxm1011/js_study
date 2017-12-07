//1.函数提升
//函数提升仅适用于函数声明，而不适用于函数表达式。

console.log(square1(5));   //25
function square1(n) { return n*n }

console.log(square3(5)); // TypeError: square is not a function
var square2 = function (n) { 
  return n * n; 
}
