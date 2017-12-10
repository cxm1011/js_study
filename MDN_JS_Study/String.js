//1.多行模板字符串
//模板字符串是一种允许内嵌表达式的String字面值. 可以用它实现多行字符串或者字符串内插等特性.
//模板字符串使用反勾号 (` `) (grave accent) 包裹内容而不是单引号或双引号. 模板字符串可以包含占位符. 
//占位符用美元符号和花括号标识 (${expression}).

//eg:1 多行
//源代码中插入的任何新行开始字符都作为模板字符串的内容. 使用一般的字符串时, 为了创建多行的字符串不得不用如下语法:

console.log("string text line 1\n\
string text line 2");
// "string text line 1
// string text line 2"
//为了实现同样效果的多行字符串, 现在可以写成如下形式:

console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"


// eg2:嵌入表达式
// 为了在一般的字符串中嵌入表达式, 需要使用如下语法:

var a = 5;
var b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
//现在, 使用模板字符串, 可以使用语法糖让类似功能的实现代码更具可读性:

var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."