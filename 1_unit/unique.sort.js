arr = [20, 40, 32, 67, 40, 20, 89, 300, 400, 15];

// es6去重排序
const unique_es6 = arr => {
    return Array.from(new Set(arr)).sort((a, b) => { return a - b; });
};

// 桶排序去重, 时间复杂度是O(M+N)
const uniquire_bucket = ([...arr]) => {
  // max是数组的最大值
  let max = 0;
  arr.forEach(o => {
    if (o > max) max = o;
  });
  // initData 是max长度的数组,且每项都是0
  let initData = new Array(max).fill(0);
  let result = []; // 去重,且排序的数组
  arr.forEach(o => {
    initData[o] = 1; // arr存在n,则initData[n] = 1
  });
  initData.forEach((o, i) => {
    // 当initData[n] = 1,result里增加n
    if (o === 1) {
      result.push(i);
    }
  });
  return result;
};

// console.log(uniquire_bucket(arr))

/**
 * 1. 冒泡排序
 * 2. 去重
 * 时间复杂度是O(N*N+2N)
 * @param {*} arr
 */
const bubble_unique = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(bubble_unique(arr));
