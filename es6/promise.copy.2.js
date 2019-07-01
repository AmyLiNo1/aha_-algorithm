class _Promise {
    constructor(resolve, reject) {
        
    }
}

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