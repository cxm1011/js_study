//1.解构(Destructuring)
//对于更复杂的赋值, 这个解构赋值destructuring assignment 
//语法是一个能从数组或对象对应的数组结构或对象字面量里提取数据的Javascript表达式

var foo = ["one", "two", "three"];
// 不使用解构
var one1   = foo[0];
var two1   = foo[1];
var three1 = foo[2];
// 使用解构
var [one, two, three] = foo;
console.log("1--------------");
console.log(one);
console.log(two);
console.log(three);
console.log();

//2.在多数情况下，如果两个操作数不是相同的类型， JavaScript 会尝试转换它们为恰当的类型来比较。
//这种行为通常发生在数字作为操作数的比较。类型转换的例外是使用 === 和 !== 操作符，
//它们会执行严格的相等和不相等比较。这些运算符不会在检查相等之前转换操作数的类型。
var var1 = 3;
console.log("2--------------");
console.log(3 == var1);
console.log("3" == var1);
console.log(3 === var1);
console.log("3" === var1);
console.log();

//3.typeof
// typeof operator 可用下面2种方式使用:
// typeof operand
// typeof (operand)
// typeof 操作符返回一个表示 operand 类型的字符串值。operand 可为字符串、变量、关键词或对象，
// 其类型将被返回。operand 两侧的括号为可选。
var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var today = new Date();
console.log("3--------------");
console.log(typeof myFun);     // returns "function"
console.log(typeof shape);     // returns "string"
console.log(typeof size);      // returns "number"
console.log(typeof today);     // returns "object"
console.log(typeof dontExist); // returns "undefined"

console.log(typeof true); // returns "boolean"
console.log(typeof null); // returns "object"
console.log();

//4
//如果指定的属性(property)在指定的对象(object)中会返回true,语法如下:

//propNameOrNumber in objectName
//propNameOrNumber在这里可以是一个代表着属性名的字符串或者是一个代表着数组索引的数值表达式，
//而objectName则是一个对象名.

// Arrays
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
console.log("4--------------");
console.log(0 in trees);        // returns true
console.log(3 in trees);        // returns true
console.log(6 in trees);        // returns false
console.log("bay" in trees);    // returns false (you must specify the index number,
                   // not the value at that index)
console.log("length" in trees); // returns true (length is an Array property)

// Predefined objects
console.log("PI "+("PI" in Math));          // returns true
var myString = new String("coral");
console.log("length "+("length" in myString));  // returns true

// Custom objects
var mycar = {make: "Honda", model: "Accord", year: 1998};
console.log("make" in mycar);  // returns true
console.log("model" in mycar); // returns true
console.log("Honda" in mycar); // returns false
console.log();

//5.instanceof
//如果对象是某种指定类型(object type)返回true.语法如下：
//例如, 下面的代码使用instanceof去判断 theDay是否是一个 Date 对象. 
//因为theDay是一个Date对象, 所以if中的代码会执行.

var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute 执行
}