//1.创建数组
var arr1 = new Array(1,2);
var arr2 = Array(3,4);
var arr3 = [5,6];
for(let num1 in arr1){
	console.log(arr1[num1]);
}
for(let num2 in arr2){
	console.log(arr2[num2]);
}
for(let num3 in arr3){
	console.log(arr3[num3]);
}

//为了创建一个长度不为0，但是又没有任何元素的数组，可选以下任何一种方式：
var arr4 = new Array(2);
var arr5 = Array(3);

// 这样有同样的效果
var arr6 = [];
arr6.length = 4;


var arr7 = [42];      // 创建一个只有唯一元素的数组:
                     // the number 42.
var arr8 = Array(42); // 创建一个没有元素的数组, 
                     // 但是数组的长度被设置成42.

// 上面的带码与下面的代码等价
var arr9 = [];
arr9.length = 42;
console.log("arr7: "+arr7[0]+" length："+ arr7.length);
console.log("arr8: "+arr8[0]+" length："+ arr8.length);
console.log("arr9:  length："+ arr9["length"]);

//数组的slice方法
//slice(start_index, upto_index) 从数组提取一个片段，并作为一个新数组返回。

var myArray = new Array ("a", "b", "c", "d", "e");
myArray = myArray.slice(1, 4);
console.log(myArray);

//splice(index, count_to_remove, addElement1, addElement2, ...)
//从数组移出一些元素，（可选）并替换它们。
var myArray2 = new Array ("1", "2", "3", "4", "5");
myArray2.splice(1, 3, "a", "b", "c", "d"); 
console.log(myArray2);