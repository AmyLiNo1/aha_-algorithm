const fullyArranged = (n) => {
    let a = new Array(10).fill(0)
    let book = new Array(10).fill(0)
    const dfs = (step) => {
        if(step === n+1) {
            for(let i =0;i<n;i++) {
                console.log(a)
            }
            return
        }
        for(let i =1; i<=n; i++) {
            if(book[i] === 0) {
                a[step] = i;
                book[i] = 1;
                dfs(n+1)
                book[i] = 0
            }
            return
        }
    }
    dfs(1)
    return
}

console.log(fullyArranged(2))