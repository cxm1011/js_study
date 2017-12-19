function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function () {
    console.log('Hi! I\'m ' + this.name + '.');
  }
  return obj;
}

var salva = createNewPerson('salva');
console.log(salva.name);
salva.greeting();

//上述代码运行良好，但是有点冗长；如果我们知道如何创建一个对象，就没有必要创建一个新的空对象
//并且返回它。幸好 JavaScript 通过构建函数提供了一个便捷的方法，方法如下：

function Person(name) {
  this.name = name;
  this.greeting = function() {
    console.log('Hi! I\'m ' + this.name + '.');
  };
}

var person1 = new Person('Bob');
var person2 = new Person('Sarah');
person1.greeting();
person2.greeting();
console.log(person1.valueOf());
console.log(Person.prototype);
console.log(Object.prototype);
