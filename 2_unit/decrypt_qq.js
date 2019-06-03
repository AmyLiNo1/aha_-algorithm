const arr = [6, 3, 1, 7, 5, 8, 9, 2, 4];
const decrypt = (arr) => {
    let result = []
    while(arr.length > 1) {
       result.push(arr.shift())
       arr.push(arr.shift())
    }
    if(arr.length === 1) {
        result.push(arr.shift())
        return result
    }
};
console.log(decrypt(arr))