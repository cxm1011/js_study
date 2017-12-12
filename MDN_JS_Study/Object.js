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