// es6 的class的用法
class _People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 静态方法,不能通过类的实例实例调用,只能通过类本身调用
  static say() {
    console.log("hello");
  }
  see() {
    console.log("something");
  }
}
const xiaoming = new _People("xiaoming", 12);
console.log(xiaoming);
xiaoming.see();

class _Child extends _People {
  constructor(name, age) {
    // 改变this指向的,继承父类的方法
    super(name, age);
  }
  static home() {
    return `static home method`;
  }
  // 可以通过这样的方法,调用static的方法
  // this.constructor.home() ||  _Child.home()
  homepage(hometown) {
    console.log(
      `i am from ${hometown}`,
      this.constructor.home(),
      _Child.home()
    );
  }
}

const xiaohong = new _Child("xiaohong", 13);
xiaohong.see();
xiaohong.homepage();
_Child.home();

console.log(
  _Child.__proto__ === _People,
  xiaohong.__proto__ === _Child.prototype
);
