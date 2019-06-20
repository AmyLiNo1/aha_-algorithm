// 父类
function _People(name, age) {
  this.name = name;
  this.age = age;
  // 类的所有实例的开辟一个新的空间,所以所有实例的sayHello都是不等的
  this.sayHello = function() {
    console.log(`hello, my name is ${this.name}`);
  };
}
// 类的所有实例的原型指向的都是同一个区域, 所以所有实例的sayHi都是相等的
_People.prototype.sayHi = function() {
  console.log(`hi, my name is ${this.name}`);
};

const xiaohei = new _People("xiaohei", 12);
const xiaobai = new _People("xiaobai", 12);
console.log(xiaohei);
xiaohei.sayHi();
// true true false true true true
console.log(`
    ${xiaohei instanceof _People}, 
    ${xiaobai.sayHi === xiaohei.sayHi}
    ${xiaobai.sayHello === xiaohei.sayHello}
    ${xiaobai.constructor === xiaohei.constructor}
    ${_People.prototype === xiaobai.__proto__}
    ${xiaobai.__proto__.constructor === _People}
`);

// 子类
function _Child(name, age) {
  this.name = name;
  this.age = age;
}
_Child.prototype = new _People(this.name, this.age); // 原型继承
_Child.prototype.constructor = _Child; // 修改指向
const xiaolv = new _Child("xiaolv", 10);
xiaolv.sayHello();
// true true false true
console.log(`
    ${xiaolv instanceof _People}
    ${xiaolv instanceof _Child}
    ${xiaolv.__proto__ === _People.prototype}
    ${xiaolv.__proto__ === _Child.prototype}
`);
