//1.对象初始化
//通过使用 this 将传入函数的值赋给对象的属性
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car("Eagle", "Talon TSi", 1993);
console.log(mycar.make);


//2.你可以通过 prototype 属性为之前定义的对象类型增加属性。这为该类型的所有对象，
//而不是仅仅一个对象增加了一个属性。下面的代码为所有类型为 car 的对象
//增加了 color 属性，然后为对象 car1 的 color 属性赋值：
Car.prototype.color = null;
mycar.color = "black";
console.log(mycar.color);


//3.在 JavaScript 中 objects 是一种引用类型。两个独立声明的对象永远也不会相等，
//即使他们有相同的属性，只有在比较一个对象和这个对象的引用时，才会返回true.
var fruit = {name: "apple"};
var fruitbear = {name: "apple"};

console.log(fruit == fruitbear) // return false
console.log(fruit === fruitbear) // return false

var fruit2 = {name: "apple"};
var fruitbear2 = fruit2;  // assign fruit object reference to fruitbear

// here fruit and fruitbear are pointing to same object
console.log(fruit2 == fruitbear2) // return true
console.log(fruit2 === fruitbear2) // return true

var person = {
	name: ['cxm','hc'],
	age: [27,25],
	address: 'pudong',
	introduce: function(){
		console.log(this.name[0]+': '+this.age[0]+'and'+this.name[1]+': '+this.age[1]);
	},
	like: {
		one: 'a',
		two: 'b'
	}
}

console.log(person.name[0]);
console.log(person.introduce);
person.introduce();
console.log(person.like.one)

//括号表示法
console.log(person['like']['one']);

//点表示法只能接受字面量的成员的名字，不接受变量值作为名字。
var myDataName = 'height';
var myDataValue = '1.80m';
person[myDataName] = myDataValue;
console.log(person['height']);

var myDataName2 = 'height2';
var myDataValue2 = '1.80m';
person.myDataName2 = myDataValue2;
console.log(person.height2);  //输出undefined
