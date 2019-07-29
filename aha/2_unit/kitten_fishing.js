const temp1 = {
    name: '小哼',
    cards:  ["2", "4", "1", "2", "5", "6"]
}
const temp2 = {
    name: '小哈',
    cards: ["3", "1", "3", "5", "6", "4"]
}

const fishing = ({cards: temp1Card, name: temp1Name}, { cards: temp2Card, name: temp2Name}) => {
    console.log(temp1Card, temp1Name, temp2Card, temp2Name)
    let result = []
    let i = 0
    while(temp1Card.length > 0 && temp2Card.length > 0) {
        console.log(`
            result: ${result}
            temp1Card: ${temp1Card}
            temp2Card: ${temp2Card}
        `)
        if(i > 66) return
        i++
        if(i % 2 === 1) {
            temp1Card = popTemp(temp1Card)
        } else {
            temp2Card  = popTemp(temp2Card)
        }
    }
    function popTemp(cards) {
        card = cards.shift()
        result.push(card)
        if(result.indexOf(card) !== result.length - 1) {
            let aaa = result.splice(result.indexOf(card)+1).reverse()
            i--
            return [...cards, ...aaa]
        }
        return cards
    }
    if(temp1Card.length === 0 || temp2Card.length === 0) {
        return `
        result: ${result}
        temp1Card: ${temp1Card}
        temp2Card: ${temp2Card}
        ${temp2Card.length === 0 ? 'temp1' : 'temp2'}win
        运行了${i}次循环
        `
    }
}

console.log(fishing(temp1, temp2))