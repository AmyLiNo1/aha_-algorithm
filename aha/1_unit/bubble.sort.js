/**
 * 冒泡排序
 * 冒泡排序的基本思想是:每次比较两个相邻的元素，如果它们的顺序错误就把它们交换 过来。
 * 设 N=arr.length
 * 时间复杂度是O(N*N)
 */

//  排序一个数组
const bubble1 = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
// 排序一个对象数组
const bubble2 = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      let key = Object.keys(arr[j])[0];
      let key1 = Object.keys(arr[j + 1])[0];
      if (arr[j][key] < arr[j + 1][key1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(
  bubble2([{ li: 5 }, { wang: 3 }, { liu: 5 }, { zhang: 2 }, { hei: 8 }])
);
console.log(bubble1([5, 3, 5, 2, 8]));
