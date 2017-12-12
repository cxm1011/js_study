//1.JavaScript 是一种基于原型而不是基于类的面向对象语言。正是由于这一根本的区别，
//其如何创建对象的层级结构以及对象的属性与属性值是如何继承的并不是那么清晰

// 基于类 vs 基于原型的语言
// 基于类的面向对象语言，比如 Java 和 C++，是构建在两个不同实体的概念之上的：
// 即类和实例。
// 类定义了所有用于具有某一组特征对象的属性（可以将 Java 中的方法和变量以及
// C++ 中的成员都视作属性）。类是抽象的事物，而不是其所描述的全部对象中的任何
// 特定的个体。例如 Employee 类可以用来表示所有雇员的集合。
// 另一方面，一个实例是一个类的实例化；也就是其中一名成员。例如， 
//Victoria 可以是 Employee 类的一个实例，表示一个特定的雇员个体。实例具有和其父类完全一致的属性。

// 基于原型的语言（如 JavaScript）并不存在这种区别：它只有对象。
//基于原型的语言具有所谓原型对象的概念。原型对象可以作为一个模板，
//新对象可以从中获得原始的属性。任何对象都可以指定其自身的属性，
//既可以是创建时也可以在运行时创建。而且，任何对象都可以作为另一个对象的原型，
//从而允许后者共享前者的属性。


//区别：
//1.定义类
// 在基于类的语言中，需要专门的类定义符来定义类。在定义类时，允许定义特殊的方法，称为构造器，
//来创建该类的实例。在构造器方法中，可以指定实例的属性的初始值以及一些其他的操作。
//你可以通过将new 操作符和构造器方法结合来创建类的实例。

// JavaScript 也遵循类似的模型，但却不同于基于类的语言。在 JavaScript 中你只需要定义构造函数来创建
//具有一组特定的初始属性和属性值的对象。任何 JavaScript 函数都可以用作构造器。 
//也可以使用 new 操作符和构造函数来创建一个新对象。

//2.子类和继承
// 基于类的语言是通过对类的定义中构建类的层级结构的。在类定义中，可以指定新的类是一个现存的类的子类。
//子类将继承父类的全部属性，并可以添加新的属性或者修改继承的属性。例如，假设 Employee 类只有 name 
//和 dept 属性，而 Manager 是 Employee 的子类并添加了 reports 属性。这时，Manager 类的实例将具有
//所有三个属性：name，dept和reports。

//JavaScript 通过将构造器函数与原型对象相关联的方式来实现继承。这样，您可以创建完全一样的 
//Employee — Manager 示例，不过需要使用略微不同的术语。首先，定义 Employee 构造器函数，
//指定 name 和 dept 属性；然后，定义 Manager 构造器函数，指定 reports 属性。最后，将一个新的
// Employee 对象赋值给 Manager 构造器函数的 prototype 属性。这样，当创建一个新的 Manager 对象时，
//它将从 Employee 对象中继承 name和dept 属性。

//3.添加和移除属性
//在基于类的语言中，通常在编译时创建类，然后在编译时或者运行时对类的实例进行实例化。一旦定义了类，
//无法对类的属性进行更改。
//然而，在 JavaScript 中，允许运行时添加或者移除任何对象的属性。
//如果您为一个对象中添加了一个属性，而这个对象又作为其它对象的原型，则以该对象作为原型的所有其它
//对象也将获得该属性。

function Employee(name,dept){
	this.name = name||"";
	this.dept = dept||"general";
}

var jim = new Employee("Jone,jim","marketing");
console.log(jim.name);
console.log(jim.dept);

function WorkerBee(projs){
	this.projs = projs||"";
}
WorkerBee.prototype = new Employee; //WorkerBee的原型为Employee

var mark = new WorkerBee(["javascript"]);
console.log(mark.name);
console.log(mark.dept);
console.log(mark.projs);


// 正如本章前面所述，在访问一个对象的属性时，JavaScript 将执行下面的步骤：

// 检查本地值是否存在。如果存在，返回该值。
// 如果本地值不存在，检查原型链（通过 __proto__ 属性）。
// 如果原型链中的某个对象具有指定属性的值，则返回该值。
// 如果这样的属性不存在，则对象没有该属性。

function Employee () {
  this.name = "";
  this.dept = "general";
}

function WorkerBee () {
  this.projects = [];
}
WorkerBee.prototype = new Employee;

var amy = new WorkerBee;
console.log("amy "+amy.name);
console.log("amy "+amy.dept);
console.log("amy "+amy.projs);

//，假设修改了与 Employee 的相关联原型中的 name 属性的值
Employee.prototype.name = "Unknown";
var amy2 = new WorkerBee;
console.log("amy2 "+ amy2.name); //发现name输出还是空。
//原因：在创建 Employee 对象的任意实例时，该实例的 name 属性将获得一个本地值（空的字符串）。
//这就意味着在创建一个新的 Employee 对象作为 WorkerBee 的原型时，WorkerBee.prototype 的 name 
//属性将具有一个本地值。因此，当 JavaScript 查找 amy2 对象（WorkerBee 的实例）的 name 属性时，
//JavaScript 将找到 WorkerBee.prototype 中的本地值。因此，也就不会继续在原型链中向上找到
// Employee.prototype 了。
console.log("amy2 "+ amy2.dept);
console.log("amy2 "+ amy2.projs);

//如果想在运行时修改一个对象的属性值并且希望该值被所有该对象的后代所继承，
//您就不能在该对象的构造器函数中定义该属性。而应该将该属性添加到该对象所关联的原型中。
//例如，假设将前面的代码作如下修改：
function Employee2 () {
  this.dept = "general";
}
Employee2.prototype.name2 = "";

function WorkerBee2 () {
  this.projects = [];
}
WorkerBee2.prototype = new Employee2;

var amy3 = new WorkerBee2;

Employee2.prototype.name2 = "Unknown";
console.log("amy3 "+ amy3.name2);  //Unknowm


//判断实例的关系
//每个对象都有一个 __proto__ 对象属性（除了 Object）；每个函数都有一个 prototype 对象属性。
//因此，通过“原型继承”，对象与其它对象之间形成关系。通过比较对象的 __proto__ 属性和函数的 
//prototype 属性可以检测对象的继承关系。JavaScript 提供了便捷方法：instanceof 操作符可以用来将
//一个对象和一个函数做检测，如果对象继承自函数的原型，则该操作符返回真。例如：
function Foo(){
	this.color = "blue";
}
var f = new Foo();
var isTrue = (f instanceof Foo);
console.log("isTrue "+isTrue);


//没有多重继承
//某些面向对象语言支持多重继承。也就是说，对象可以从无关的多个父对象中继承属性和属性值。
//JavaScript 不支持多重继承。

//JavaScript 属性值的继承是在运行时通过检索对象的原型链来实现的。因为对象只有一个原型与之关联，
//所以 JavaScript 无法动态地从多个原型链中继承。