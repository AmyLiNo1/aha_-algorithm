const olympus_1 = () => {
    let result = []
    for (let i = 0; i < 10; i++) {
        if ((10 * i + 3) * 6528 === (30 + i) * 8256) {
            result.push(i)
        }
    }
    return result
}

// console.log(olympus_1())




const olympus_3 = () => {
    let result = []
    for(let i1=1;i1<10;i1++) {
        for(let i2=1;i2<10;i2++) {
            for(let i3=1;i3<10;i3++) {
                for(let i4=1;i4<10;i4++) {
                    for(let i5=1;i5<10;i5++) {
                        for(let i6=1;i6<10;i6++) {
                            for(let i7=1;i7<10;i7++) {
                                for(let i8=1;i8<10;i8++) {
                                    for(let i9=1;i9<10;i9++) {
                                        if (100 * i1 + 10 * i2 + i3 + 100 * i4 + 10 * i5 + i6 === 100 * i7 + 10 * i8 + i9) {
                                            let arr = [i1, i2, i3, i4, i5, i6, i7,i8,i9]
                                            if(Array.from(new Set(arr)).length === 9) {
                                                console.log(100*i1+10*i2+i3, 100*i4+10*i5+i6, 100*i7+10*i8+i9)
                                                result.push(`${100*i1+10*i2+i3}+${100*i4+10*i5+i6}=${100*i7+10*i8+i9}`)

                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return result
}
console.log(olympus_3())

