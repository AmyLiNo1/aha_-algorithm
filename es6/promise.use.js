// promise 有3种状态,且都是不可逆的 (pending fulfilled rejected)
// es6 采用的是PromiseA+规范
const p = new Promise((resolve, reject) => {
  let random = Math.random();
  if (random > 0.5) {
    resolve(random);
  } else {
    reject(random);
  }
});

p.then(res => {
  console.log("res", res);
}).catch(err => {
  console.log("err", err);
});
