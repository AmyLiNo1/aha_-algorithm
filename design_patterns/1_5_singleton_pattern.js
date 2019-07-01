// class 应用的单例模式

var size = Symbol('size');
class Collection {
  constructor() {
    this[size] = 0;
  }

  add(item) {
    console.log(size, this[size])
    this[this[size]] = item;
    this[size]++;
  }

  static sizeOf(instance) {
    console.log(instance, size, '32')
    return instance[size];
  }
}
var x = new Collection();
Collection.sizeOf(x) // 0
console.log(size, '33')

x.add('foo');
Collection.sizeOf(x) // 1

console.log(x)
Object.keys(x) // ['0']
Object.getOwnPropertyNames(x) // ['0']
Object.getOwnPropertySymbols(x) // [Symbol(size)]
