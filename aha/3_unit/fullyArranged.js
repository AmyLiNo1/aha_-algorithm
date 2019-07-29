const fullyArranged = (n) => {
    let result = []
    for(let i1 = 0; i1 < 3; i1++) {
        for(let i2 = 0; i2 < 3; i2++) {
            for(let i3 = 0; i3 < 3; i3++) {
                if(i1 !== i2 && i2 !==i3 && i1 !==i3) console.log(i1,i2, i3)
            }
        }
    }

    return result
}

console.log(fullyArranged(3))