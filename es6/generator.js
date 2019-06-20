// generator 的应用

// 有参数的传递
function run_g2() {
  function* g2(key) {
    let keya = yield "a";
    console.log(`keya: ${keya}`);
    let keyb = yield "b";
    console.log(`keyb: ${keyb}`);
    let keyc = yield "c";
    console.log(`keyc: ${keyc}`);
    return "ending";
  }
  let gen2 = g2("key");
  console.log("gen2----", gen2.next("该参数不会被接收到"));
  console.log("gen2----keya", gen2.next("keya"));
  console.log("gen2----keyb", gen2.next("keyb"));
  console.log("gen2----keyc", gen2.next("keyc"));
  console.log("gen2----keyd", gen2.next("keyd"));
  console.log("gen2----keye", gen2.next("keye"));
}

// 最简单的generator函数, 无参数的传递
function* g1() {
  yield "a";
  yield "b";
  yield "c";
}
let gen1 = g1();

function next0() {
  console.log(gen1); // g1 迭代器
  console.log(gen1.next()); // {value: a, done: false}
  console.log(gen1.next()); // {value: b, done: false}
  console.log(gen1.next()); // {value: c, done: false}
  console.log(gen1.next()); // {value: undefind, done: true}
}

function next1() {
  let cc = gen1.next();
  console.log("第一次执行", cc);
  while (!cc.done) {
    cc = gen1.next();
    console.log(cc);
  }
}
function next2(gen1) {
  let { value, done } = gen1.next();
  console.log({ value, done });
  if (!done) {
    next2(gen1);
  }
}
// 执行generator函数的三个方法
// next0()
// next1()
// next2(gen1)

const nextfn = function() {
  // yield 一个promise,先异步执行promise
  function* r(num) {
    const r1 = yield compute(num);
    console.log("r1:", r1);
    yield compute(r1);
  }
  function compute(num) {
    return new Promise(resolve => {
      setTimeout(() => {
        const ret = num * num;
        console.log("ret", ret);
        resolve(ret);
      }, 1000);
    });
  }
  let it = r(2);
  // console.log(it.next())
  // it.next().value.then(num => it.next(num))
  function next(gen, data) {
    let { value, done } = gen.next(data);
    console.log("data:", data);
    if (!done) {
      value.then(num => {
        next(gen, num);
        console.log("value是一个promise", value, done);
      });
    }
  }
  next(it, "something");
};
nextfn();
