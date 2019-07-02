/**题干
 * # 墙
 * G 敌人
 * . 空地
 * 炸弹只能放到空地，求放到哪个位置可以炸死最多的敌人
 * 参数：arr， i， j
 * 只有一个参数，arr，求放到哪个位置可以炸死最多的敌人
 * 有参数 arr,i,j 求在arr[i][j]处可以杀死多少个敌人
 */

const arr = [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', 'G', 'G', '.', 'G', 'G', 'G', '#', 'G', 'G', 'G', '.', '#'],
    ['#', '#', '#', '.', '#', 'G', '#', 'G', '#', 'G', '#', 'G', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', 'G', '#'],
    ['#', 'G', '#', '.', '#', '#', '#', '.', '#', 'G', '#', 'G', '#'],
    ['#', 'G', 'G', '.', 'G', 'G', 'G', '.', '#', '.', 'G', 'G', '#'],
    ['#', 'G', '#', '.', '#', 'G', '#', '.', '#', '.', '#', '#', '#'],
    ['#', '#', 'G', '.', '.', '.', 'G', '.', '.', '.', '.', '.', '#'],
    ['#', 'G', '#', '.', '#', 'G', '#', '#', '#', '.', '#', 'G', '#'],
    ['#', '.', '.', '.', 'G', '#', 'G', 'G', 'G', '.', 'G', 'G', '#'],
    ['#', 'G', '#', '.', '#', 'G', '#', 'G', '#', '.', '#', 'G', '#'],
    ['#', 'G', 'G', '.', 'G', 'G', 'G', '#', 'G', '.', 'G', 'G', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
]


// 在位置arr[i][j]可以杀死的敌人数量和敌人位置
const fun = (i, j, arr) => {
    let sum = 0, result = [];
    for(let i1=i;i1>0;i1--) {
        if(arr[i1][j] === 'G') {
            sum++;
            result.push([i1, j])
        }
        if(arr[i1][j] === '#') break;
    }
    for(let i2=i;i2<arr.length;i2++) {
        if(arr[i2][j] === 'G') {
            sum++;
            result.push([i2, j])
        }
        if(arr[i2][j] === '#') break;
    }
    for(let j1=j; j1>0; j1--) {
        if(arr[i][j1] === 'G')  {
            sum++;
            result.push([i, j1])
        }
        if(arr[i][j1] === '#') break
    }
    for(let j2=j;j2<arr[i].length;j2++) {
        if(arr[i][j2] === 'G') {
            sum++;
            result.push([i, j2])
        }
        if(arr[i][j2] === '#') break
    }
    return { sum, result }
}



const bombman = (arr, i, j) => {
    if(i && j && arr[i][j] !== '.') {
        return `第${i}行，第${j}列不是空地，是${arr[i][j]==='G'?'敌人':'墙'}`
    }
    if(i && j) {
        const { sum,  result} = fun(i, j, arr)
        return `第${i}行，第${j}，可以打死${sum}个敌人`
    }

    let obj = {
        sum: 0, ii: 0, jj: 0, result: []
    }
    for(let i = 0; i< arr.length;i++) {
        for(let j = 0; j< arr[i].length;j++) {
            if(arr[i][j] === '.') {
                const { sum, result } = fun(i, j, arr)
                if(sum > obj.sum) {
                    obj = {
                        sum, ii: i, jj: j
                    }
                }
            }
        }
    }
    const {ii, jj, sum} = obj
    return `第${ii}行，第${jj}，可以打死的敌人最多，${sum}个敌人`
}

console.log(bombman(arr))
console.log(bombman(arr, 9, 9))
console.log(bombman(arr, 1, 5))