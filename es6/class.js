// class_use.js 转化为es5的代码,和添加的部分注释
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// setPrototypeOf || function() {}
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) {
  // 被继承的类(这里指_People)不是函数,或者 不存在,则报错
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

// 手动定义 Henan.__proto__ = People
// 应该是Henan的实例.__proto__ = People.prototype
function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}
// typeof Symbol判断 Symbol是否可用
// Symbol.hasInstance
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

// 如果类的实例的this 不指向类, 则报错
function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false; // 不能使用delete删除
    descriptor.configurable = true; // 可通过foreach循环
    if ("value" in descriptor) descriptor.writable = true; // 可重写
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 构造函数是一个自调用的匿名函数
var _People =
/*#__PURE__*/
function () {
  function _People(name, age) {
    _classCallCheck(this, _People);

    this.name = name;
    this.age = age;
  } // 静态方法,不能通过类的实例实例调用,只能通过类本身调用


  _createClass(_People, [{
    key: "see",
    value: function see() {
      console.log("something");
    }
  }], [{
    key: "say",
    value: function say() {
      console.log("hello");
    }
  }]);

  return _People;
}();

var xiaoming = new _People("xiaoming", 12);
console.log(xiaoming);
xiaoming.see();

var _Child =
/*#__PURE__*/
function (_People2) {
  // 继承
  _inherits(_Child, _People2);

  function _Child(name, age) {
    _classCallCheck(this, _Child);
    return _possibleConstructorReturn(this, _getPrototypeOf(_Child).call(this, name, age));
  }

  _createClass(_Child, [{
    key: "homepage",
    // 可以通过这样的方法,调用static的方法
    // this.constructor.home() ||  _Child.home()
    value: function homepage(hometown) {
      console.log("i am from ".concat(hometown), this.constructor.home(), _Child.home());
    }
  }], [{
    key: "home",
    value: function home() {
      return "static home method";
    }
  }]);

  return _Child;
}(_People);

var xiaohong = new _Child("xiaohong", 13);
xiaohong.see();
xiaohong.homepage();

_Child.home();

console.log(_Child.__proto__ === _People, xiaohong.__proto__ === _Child.prototype); // true true