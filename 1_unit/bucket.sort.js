/**
 * 最快最简单的排序——桶排序
 * 设 M=arr.max+1, N=arr.length
 * 时间复杂度是O(2M+2N)
 * 缺点: 浪费空间,适合处理比较集中的数据
 */

var arr = [5, 3, 5, 2, 8];
var initData = new Array(10).fill(0); // 初始化空数组
let result = []; // 排序好的数组
arr.forEach((o, i) => {
  initData[o]++; // n出现了m次,则 initData[n] = m
});
initData.map((o, i) => {
  while (o !== 0) {
    result.unshift(i); // 再向result输入数据
    o--;
  }
});
console.log(result);
