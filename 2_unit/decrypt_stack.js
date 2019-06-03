const str = 11121;
const decrypt = str => {
    let arr = String(str).split('')
    while(arr.length > 1) {
        if(arr.pop() !== arr.shift()) return false
        if(arr.length === 1) return true
    }
    return true
};

console.log(decrypt(str));
