console.log(NaN === NaN);
console.log(+0 === -0);
console.log(+0 == -0);

var date = new Date();
console.log(date);
console.log(date.getDay());


console.log(null == undefined); //true
console.log(null === undefined); //false


var s='hello';
s.toUpperCase();
console.log(s);  //原字符串未改变


var a = [];
var b = a;
b[0] = 1;
console.log(a[0]);  //1
console.log(a == b); //true 当引用同一个对象时即相等
console.log(a === b); //true


function testScope(){
	var i = 1;
	console.log('j-1 '+j);  //undefined
	if(true){
		var j = 2;
		for(var k=0;k<10;k++){

		}
		console.log('k-1 '+k); //10
	}
	console.log('j-2 '+j);  //2
	console.log('k-2 '+k); //10
}
testScope();

var s = 'global';
function test2(){
	console.log('s-1 '+s);  //undefined
	var s = 'local';
	console.log('s-2 '+s);  //local
}
test2();

var s2 = 'global';
function test3(){
	console.log('s2-1 '+s2); //global
}
test3();