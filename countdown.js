function countdown(number){
    if(number < 0){
        return []
    }
    let returnArr = []
    for(let i = number; i >= 0; i--){
        returnArr.push(i)
    }
    return returnArr
}

console.log(countdown(10))
console.log(countdown(1) )
console.log(countdown(0) )
console.log(countdown(-1))
