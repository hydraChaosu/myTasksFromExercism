function isArmstrong(number) {
    const numberLength = String(number).length
    const numbers = String(number).split('')
    const result = numbers.reduce((acc, cur) => {
        return acc = acc + (cur ** numberLength)
    }, 0)
    return result === number
}

console.log(isArmstrong(153))
console.log(isArmstrong(154))
