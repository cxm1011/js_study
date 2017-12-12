//1.Map
//按照插入顺序遍历
var sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
for(var [key,value] of sayings){
	console.log(key);
	console.log(sayings.get(key));
}

//2.set
//Set对象是一组值的集合，这些值是不重复的，可以按照添加顺序来遍历。
var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

//数组转set，重复的值会被删除
var  mySetFromArray = new Set([1,2,4,2,1]);
for(var key of mySetFromArray){
	console.log(key);  //1,2,4
}