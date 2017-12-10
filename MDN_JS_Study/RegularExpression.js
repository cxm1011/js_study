//正则表达式可以被用于RegExp的exec和test方法以及 String的match、replace、search和split方法。这些方法在JavaScript 手册中有详细的解释。

// 使用正则表达式的方法
// 方法	描述
// exec	一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回null）。
// test	一个在字符串中测试是否匹配的RegExp方法，它返回true或false。
// match	一个在字符串中执行查找匹配的String方法，它返回一个数组或者在未匹配到时返回null。
// search	一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。
// replace	一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。
// split	一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的String方法。


var myRe = /d(b+)d/g;
var myArray = myRe.exec("cadbbdbsbz");
console.log(myArray);  
//[ 'dbbd', 'bb', index: 2, input: 'cadbbdbsbz' ]
//对应解释：
//[匹配到的字符串和所有被记住的子字符串,在输入的字符串中匹配到的以0开始的索引值,初始字符串。]

//如果你不需要访问正则表达式的属性，这个脚本通过另一个方法来创建myArray：
var myArray2 = /d(b+)d/g.exec("cdbbdbsbz");
console.log(myArray2);


var myArray = /d(b+)d/g.exec("cdbbdbsbz");
console.log("The value of lastIndex is " + /d(b+)d/g.lastIndex);