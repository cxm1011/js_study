//1.js只有一个数字类型，内部表示为64位浮点数，所以1与1.0相同
console.log('1:'+(1 === 1.0));  //true

//2.NaN不等于任何值，包括自己。可使用isNaN(number)检测NaN
console.log('2-1:'+(NaN === NaN));  //false
console.log('2-2:'+(isNaN(NaN)));	//true

//3.字符串拥有length属性。没有字符类型，要表示一个字符，创建一个字符的字符串即可。
//两个包含完全相同的字符且字符顺序也相同的字符串是相同的字符串
console.log('3-1:'+('five'.length));  //4
console.log('3-2:'+('c'+'a'+'t' === 'cat'));  //true
