//数组

var arr1 = [1,,2];
console.log(arr1[1]);  //undefined

var arr2 = [,,];
console.log(arr2.length);  //2.数组允许有可选的逗号的结尾。所以数组长度是2不是3

//使用构造函数Array()创建数组
var arr3 = new Array();   //作用与直接量[]创建类似，该数组就没有元素	 	

//使用负数或者非整数来索引数组
arr2[-1.2] = 'hello';
console.log(arr2[-1.2]);

//delete操作不会影响数组的长度
var arr4 = [1,2,3];
delete(arr4[1]);
console.log(arr4.length);  //3.delete操作不会影响数组的长度 


//数组中的方法
//join
var arr5 = [1,2,3];
console.log(arr5.join());   //1,2,3   将数组中的元素转化为字符串并连接在一起
console.log(arr5.join(" ")); //1  2  3 

//reverse
console.log(arr5.reverse().join());  //3,2,1


//sort
var arr6 = ['cc','hh','aa'];
console.log(arr6.sort()); //[ 'aa', 'cc', 'hh' ]

//concat  拼接数组
console.log(arr6.concat('gg',['11',[3]]));

//slice  返回数组的一个片段  两个参数对应起始和终止位置(不包括终止位置)
var  arr7 = [7,8,9,10];
console.log(arr7.slice(1,3));  //8,9
//只有一个参数表示到数组末尾
console.log(arr7.slice(1));  //8,9,10
//负数表示相对于数组中最后一个元素的位置.即加上数组长度。要还是负数，则为从第0个元素开始
console.log(arr7.slice(-9,-1));  //7,8,9
console.log(arr7.slice(-1,-9));  //[]

//splice
//第一个参数指令了插入或者删除的位置，第二个参数指定了删除元素的个数。
var  arr8 = [7,8,9,10];
console.log(arr8.splice(2,2));  //9,10  返回删除的数组
console.log(arr8);  //7,8   剩余的部分

var  arr9 = [7,8,9,10];
console.log(arr9.splice(2,0,'a','b','c'));  //[]  因为删除元素为0个
console.log(arr9);  //7,8,'a','b','c',9,10


//push 和 pop
//push在数组末尾处添加数据并返回数组的长度
var stack = [];
console.log(stack.push(1,6));   //2
console.log(stack.pop());   //6

//unshift和shift是在头部进行删除和插入

//toString


//forEach()。传递的函数作为forEach的第一个参数，传递的函数中使用三个参数调用该函数：
//数组元素、元素的索引和数组本身
var arr10 = [5,6,7,8];
var sum = 0;
arr10.forEach(function(value){
	sum+=value;
});
console.log(sum);   //26

arr10.forEach(function(v,i,a){
	a[i] +=1;
});
console.log(arr10);  //6,7,8,9

//map().将数组中的每个元素传递给指定的函数，并返回一个新数组
var arr11 = [5,6,7,8];
var arr11_1 = arr11.map(function(x){
	return x+2;
});
console.log(arr11_1);  //7,8,9,10


//filter().返回的是原数组的一个子集。传递的函数进行逻辑判定，返回true/false
var arr11 = [5,6,7,8];
smallerValues = arr11.filter(function(x){
	return x<6
});
console.log(smallerValues);  //5

//every和some
//它们都对数组元素应用指定的函数进行判定
//every仅当数组中所有元素调用判定函数返回true,它才返回true
var arr12 = [5,6,7,8];
console.log(arr12.every(function(x){
	return x<9;
}));           //true
//some则存在一个true即返回true，只有当全部false时才返回false
var arr12 = [5,6,7,8];
console.log(arr12.some(function(x){
	return x<6;
}));    //true

//reduce 和 reduceRight

//indexOf 和lastIndexOf
//indexOf从数组头部开始找到整个数组中具有指定值元素的索引，找不到即为-1.lastIndexOf则从尾向头部找
var arr12 = [5,6,7,8];
console.log(arr12.indexOf(6));