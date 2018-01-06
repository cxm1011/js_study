// ===运算符

console.log(null === null);  //true
console.log(undefined === undefined);	 //true
console.log(NaN === NaN);	//false


console.log('1'+'2'); //12
console.log('1'+2);   //12
console.log('11'<2);  //先转为数字11，false
console.log('11'< '2');  //字符串的比较，true
console.log('one'<2);  //false。字符串转成NaN，NaN与任何数字比较都为false.

//in运算符
var point = {x:1,y:2};
console.log('x' in point); //true

var data = [7,8,9];
console.log('0' in data); //true.数组包含第0个元素
console.log('3' in data); //false
console.log(7 in data);  //false.没有索引为7的元素