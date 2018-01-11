//最简单闭包
//函数和函数内部能访问到的变量的总和，就是一个闭包
var local = '变量';
function foo(){
	console.log(local);
}
foo();

//local和bar函数也组成一个闭包。这样外部可以访问局部变量
function foo2(){
	var local = 1;
	function bar(){
		local++;
		return local;
	}
	return bar;
}

var bar2 = foo2();
console.log(bar2());