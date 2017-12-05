//1.为false的情形
// 下面这些值将被计算出 false (also known as Falsy values):
// false
// undefined
// null
// 0
// NaN
// 空字符串 ("")


//2.请不要混淆原始的布尔值true和false 与 布尔对象的值true和false
var b = new Boolean(false);
if (b) // this condition evaluates to true
if (b == true) // this condition evaluates to false


//3.对象操作语句
//JavaScript 用 for...in, for each...in和 with语句来操作对象。
//for...in 语句迭代一个指定的变量去遍历这个对象的属性，每个属性，javascript 执行指定的语句。
//一个for...in 语句示例如下：

for (variable in object) {
   statements
}

//for each...in 是一种在 JavaScript 1.6介绍过的循环语句。它和for...in相似，
//但是让对象属性的值递回取得，而不是作用于它们的名字。


//try...catch
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch(e) {
    console.log(1);
    return true; // this return statement is suspended
                 // until finally block has completed
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now  
  console.log(5); // not reachable
}
f(); // console 0, 1, 3; returns false