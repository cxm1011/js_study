//1.方法模式调用
var myObject = {
	value:0,
	increment:function(inc){
		this.value += typeof inc === 'number'? inc : 1;
	}
}

myObject.increment();
console.log('1-1:'+ myObject.value);  //1
myObject.increment(2);
console.log('1-2:'+ myObject.value);  //3

//2.函数调用模式
//当一个函数并非一个对象的属性时，那么它就是被当做一个函数来调用的
var add = function(a,b){
	return a+b;
}
var sum = add(3,4);

//3.构造器调用模式
var Quo = function(string){
	this.status = string;
}

Quo.prototype.getStatus = function(){
	return this.status;
}

var myQuo = new Quo('confused');
console.log('3-1:'+myQuo.getStatus());

//4.Apply调用模式。apply方法让我们构建一个参数数组传递给调用函数，该方法接收两个参数，
//第1个是要绑定给this的值，第2个是一个参数数组。
var array = [3,4];
var sum = add.apply(null,array);
console.log('4-1:'+sum);

//闭包
var n = 999;
function f1(){
	var m = 1000;
	console.log('5-1:'+n); //内部作用域能读取外部作用域的值
}
f1();  //5-1:999
//console.log('5-2:'+m);  //报错。外部作用域读取不到内部变量的值 

//从外部读取局部变量
function f2(){
	var n1 = 999;
	function f3(){
		console.log('5-2:'+n1);
	}
	return f3; //f2中的局部变量，在f3都是可见的，那将f3作为返回值，就可以在f2外部读取其内部变量
}
var result = f2();
result();



//
var myObject = (function(){
	var value = 0;
	return {
		increment:function(inc){
			value +=typeof inc === 'number'?inc:1;
		},
		getValue:function(){
			return value;
		}
	}
}());

myObject.increment(2);
console.log('6-1:'+myObject.getValue());


//7.函数创建两种方式
//一.
function f1(num1,num2){
	var res = num1+num2;
	return res;
}
var sum1 = f1(2,7);
console.log('7-1:'+ sum1);
//二.
var f2 = function(num1,num2){
	var res = num1+num2;
	return res;
}
var sum2 = f1(2,7);
console.log('7-2:'+ sum2);
//改成箭头函数
//箭头函数，()中传递参数，如果没有参数不能没有，当只有一个参数时，那么括号是可选的
//如果函数体中有单个表达式语句，在主体中花括号是可选的，使用return语句也是可选的。
//即:var f4 = (num1,num2) => num1+num2;   //不写return时花括号也得去除
var f3 = (num1,num2)=>{return num1+num2};
var sum3 = f3(2,7);
console.log('7-3:'+ sum3);

//返回对象字面量。需要将返回对象装入小括号中
var f5 = (name,age) =>({
	name:name,
	age:age
})
var r = f5('my cat',22);
console.log('7-4:'+ r.name+' '+r.age);

//箭头函数支持rest参数
var f6 = (num1,num2,...params) =>{
	console.log('7-5:'+ params.length);
	return num1+num2
}
var r6 = f6(10,22,10,10);
console.log('7-5:'+ r6);

//箭头函数支持默认参数
var f7 = (num1 = 10,num2=12) =>{
	return num1+num2
}
var r7 = f7();
console.log('7-6:'+r7);

//this在箭头函数中如何工作。箭头函数没有自己的this值，其值总是从封闭范围继承
var Cat = {
	name: 'mew',
	canRun: function(){
		console.log(this);
		var foo = () =>{
			console.log(this);
		}
		foo();
	}
}
Cat.canRun(); //输出相同的this。

//箭头函数限制条件
//1.没有参数对象 
//2.不能与新运算符一起使用，因此不能用作构造函数
//3.没有原型属性 
var foo = (name,age) =>{name = name,age=age};
var f8 = new foo('car',11); //报错。因为尝试使用箭头函数作为构造函数

