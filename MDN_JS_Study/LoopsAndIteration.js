//for...in 语句循环一个指定的变量来循环一个对象所有可枚举的属性。
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    console.log(key); // 'name', 'age', 'city'
}

//遍历数组
var a = ['A', 'B', 'C'];
for (var i in a) {
    console.log(i); // '0', '1', '2'
    console.log(a[i]); // 'A', 'B', 'C'
}


//for...of语句在可迭代的对象上创建了一个循环(包括Array, Map, Set, 参数对象（ arguments） 等等)
//对值的每一个独特的属性调用一个将被执行的自定义的和语句挂钩的迭代。
let arr = [3, 5, 7];
arr.push(6);
arr.foo = "hello";

for (let i in arr) {
   console.log(i); //  "0", "1", "2", ,'3',"foo"
}

//一个数据结构只要部署了Symbol.iterator属性，就被视为具有 iterator 
//接口，就可以用for...of循环遍历它的成员。也就是说，for...of循环内部调用的是数据结构的Symbol.iterator方法。
for (let i of arr) {
   console.log(i); // "3", "5", "7" ,'6'// 注意这里没有 hello(字符串没有iterator属性)
}