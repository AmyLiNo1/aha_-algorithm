// 数字： 需要的火柴数
// 0:6,1:2,2:5,3:5,4:4,5:5,6:6,7:3,8:7,9:6,+:2,=:2


// 数字num有result个火柴棒
const aa = (num) => {
    let result = 0
    let arr = [6,2,5,5,4,5,6,3,7,6]
    if(num === 0) return arr[0]
    while(num) {
        result += arr[num%10]
        num = Math.floor(num/10)
    }
    return result
}
const matchstick = (m) => {
    let len = Math.ceil((m-2-2)/2/2)
    let result = []
    let max = 0
    for(let i = len;i--; i>0) {
        max+=10**i
    }
    for (let a = max; a--; a >= 0) {
        for (let b = max; b--; b >= 0) {
           let c = a + b
           if(aa(c)+ aa(a) + aa(b) === m-4) {
            result.push(`${a}+${b}=${c}`)
           }
        }
    }
    return result
}

console.log(matchstick(18))