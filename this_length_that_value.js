function thisLength(num1, num2){
    if(num1 === num2){
        return "Jinx!"
    }
    if(num1 <= 0){
        return []
    }
    let returnArr = []
    for(let i = 0; i < num1; i++){
        returnArr.push(num2)
    }
    return returnArr
}

console.log('1 4', thisLength(1,4))
console.log('2 6', thisLength(2,6))
console.log('6 6', thisLength(6,6))
console.log('0 6', thisLength(0,6))
console.log('-1 6', thisLength(-1,6))
