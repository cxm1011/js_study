//对象的三个属性
//1.原型属性
var p = {x:1};
var o = Object.create(p);
console.log(p.isPrototypeOf(o));  //检测p是否是o的原型  true
console.log(Object.prototype.isPrototypeOf(p));  //true

//2.类属性


//3.可扩展性
