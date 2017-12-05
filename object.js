//1.检索对象里包含的值，有两种方法。一是[]中括住一个字符串表达式的值，
//二是使用.表示法(优先使用)，对于属性名中有种斜杠是不允许的，必须用双引号引起来
var storage = {
	'first-name':'jc',
	'second-name':'qg'
}
var flight = {
	airline:'oca',
	'departure':{
		iata:'syd',
		time:'2017-11-27'
	}
}
console.log('1-1:'+(storage['first-name']));  //jc
console.log('1-2:'+(flight['airline'])); 	  //oca
console.log('1-3:'+(flight.departure.time));  //2017-11-27

//2.||运算符可以用来填充默认值
var middleName = storage.middleName || 'cxm';
console.log('2-1:'+ middleName);   //cxm

//3.对象通过引用来传递，它们永远不会复制
var anotherObject = storage;
anotherObject.lastName = 'm';
console.log('3-1:'+ storage.lastName);    //m

//4.原型，原型链
//构造函数
function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
}
//通过原型模式添加所有实例共享的方法
Person.prototype.sayName = function(){
	console.log('4-1:'+this.name);
}
var person1 = new Person('Weiwei',27,'Student');
var person2 = new Person('Lily',28,'teacher');
console.log('4-1:'+(person1.sayName === person2.sayName)); //true;通过原型模式定义的方法为所有实例所共享
person1.sayName();  //Weiwei
person2.sayName();  //Lily

//使用原型链作为实现继承的基本思想:利用原型让一个引用类型继承另一个引用类型的属性和方法。
//基本概念:1.每个构造函数都有一个原型对象(prototype)
//		   2.原型对象包含一个指向构造函数的指针
//		   3.实例都包含一个指向原型对象的内部指针([[Prototype]])
function Father(){
	this.fatherValue = true;
}

Father.prototype.getFatherValue = function(){
	console.log('4-2:'+this.fatherValue);
}

function Child(){
	this.childValue = false; 
}

//实现继承
Child.prototype = new Father();  //本质:原来存在于Father的实例中的所有属性和方法，现在也存在于
								//Child.prototype了
Child.prototype.getChildValue = function(){
	console.log('4-2:'+this.childValue);
}
 
var instance = new Child();
instance.getFatherValue();  //true;经历三个步骤:1.搜索实例 2.搜索Child.prototype 3.搜索Father.prototype
instance.getChildValue();   //false

//借用构造函数继承。基本思想:在子类构造函数的内部调用超类型构造函数
function Father1(name){
	this.name = name;
	this.colors = ['red','blue','green'];
}

function Child1(name){
	//使用call是为了修正Father1内部的this指向
	Father1.call(this,name);
}

var instance1 = new Child1('weiwei');
instance1.colors.push('black');
console.log('4-3:'+instance1.colors);
console.log('4-3:'+instance1.name);

var instance2 = new Child1('liny');
console.log('4-3:'+instance2.colors);
console.log('4-3:'+instance2.name);


//组合使用原型链和借用构造函数。也就是说，使用原型链实现对原型属性的方法的继承，而通过
//借用构造函数来实现对实例属性的继承
function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
}

Person.prototype.sayName = function(){
	console.log('4-4:'+this.name);
}

function Student(name,age,job,school){
	//继承父类的所有实例属性(获得父类构造函数中的属性)
	Person.call(this,name,age,job);
	this.school = school;
}

//继承父类的原型方法(获得父类原型链上的属性和方法)
Student.prototype  = new Person();

//新增子类方法
Student.prototype.saySchool = function(){
	console.log('4-4:'+this.school);
}

var person1 = new Person('weiwei',27,'student');
var student1 = new Student('liny',29,'doctor','hongxing');
console.log('4-4:'+ (person1.sayName === student1.sayName));
person1.sayName();
student1.sayName();
student1.saySchool();