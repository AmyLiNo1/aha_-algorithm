

// 生成随机数组
const arr = Array.from(new Array(12)).map(o => {
    return Math.ceil(Math.random() * 100)
})

// 选择排序
const selectionSort = (arr) => {
    const len = arr.length
    for(let i = 0; i< len; i++) {
        let min = i;
        for(let j = i + 1; j< len; j++) {
            if(arr[min] > arr[j]) {
                min = j;
            }
        }
        [arr[min], arr[i]] = [arr[i], arr[min]]
    }
    return arr;
}
console.log(selectionSort(arr));