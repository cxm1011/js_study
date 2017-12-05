//1.变量的默认值
//用 var 或 let 声明的且未赋初值的变量，值会被设定为 undefined。

//试图访问一个未声明的变量或者访问一个使用 let 声明的但未初始化的变量会导致一个
// ReferenceError 异常被抛出：
var a;
// a 的值是 undefined
console.log("The value of a is " + a); 

// Uncaught ReferenceError: b is not defined
// console.log("The value of b is " + b); 

// // c 的值是 undefined 
// console.log("The value of c is " + c); 
// var c;

// // Uncaught ReferenceError: x is not defined 
// console.log("The value of x is " + x); 
// let x;

//undefined 值在布尔类型环境中会被当作 false;
//当你对一个 null 变量求值时，空值 null 在数值类型环境中会被当作0来对待，
//而布尔类型环境中会被当作 false


//2.变量声明提升
//JavaScript 变量的另一特别之处是，你可以引用稍后声明的变量而不会引发异常。
//这一概念称为变量声明提升(hoisting)；JavaScript 变量感觉上是被“提升”或移到了所有函数
//和语句之前。然而提升后的变量将返回 undefined 值。
//所以在使用或引用某个变量之后进行声明和初始化操作，这个被提升的引用仍将得到 undefined 值。
var x;
console.log(x === undefined); // logs "true"
x = 3;

//在 ECMAScript 2015 中，let（const）将不会提升变量到代码块的顶部。
//因此，在变量声明之前引用这个变量，将抛出错误ReferenceError。
//这个变量将从代码块一开始的时候就处在一个“暂时性死区”，直到这个变量被声明为止。
// console.log(y); // ReferenceError
// let y = 3;


//3.函数提升
//对于函数，只有函数声明会被提升到顶部，而不包括函数表达式。
/* 函数声明 */
foo(); // "bar"

function foo() {
  console.log("bar");
}

/* 函数表达式   表达式定义的函数，称为匿名函数。匿名函数没有函数提升。*/

// baz(); // TypeError: baz is not a function
// //此时的"baz"相当于一个声明的变量，类型为undefined。
// 由于baz只是相当于一个变量，因此浏览器认为"baz()"不是一个函数。
// var baz = function() {
//   console.log("bar2");
// };


//4.常量
//你可以用关键字 const 创建一个只读(read-only)的常量。常量标识符的命名规则和变量相同：
//必须以字母、下划线或美元符号开头并可以包含有字母、数字或下划线。
//常量不可以通过赋值改变其值，也不可以在脚本运行时重新声明。它必须被初始化为某个值。


//5.数据类型
//JavaScript语言可以识别下面 7 种不同类型的值：

// 六种 原型 数据类型:
// Boolean.  布尔值，true 和 false.
// null. 一个表明 null 值的特殊关键字。 JavaScript 是大小写敏感的，因此 null 与 Null、NULL或其他变量完全不同。
// undefined.  变量未定义时的属性。
// Number.  表示数字，例如： 42 或者 3.14159。
// String.  表示字符串，例如："Howdy"
// Symbol ( 在 ECMAScript 6 中新添加的类型).。一种数据类型，它的实例是唯一且不可改变的。
// 以及 Object 对象

//数据类型转换
//在涉及加法运算符(+)的数字和字符串表达式中，JavaScript 会把数字值转换为字符串。
//例如，假设有如下的语句：

var x1 = "The answer is " + 42 // "The answer is 42"
var y1 = 42 + " is the answer" // "42 is the answer

//涉及其它运算符（译注：如下面的减号'-'）时，JavaScript语言不会把数字变为字符串。例如（译注：第一例是数学运算，第二例是字符串运算）：

"37" - 7 // 30
"37" + 7 // "377"

console.log("30"+2);