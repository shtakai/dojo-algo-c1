function valuesGreaterThanSecondGenaralized(arr){
    let returnArr = []
    for(let i in arr){
        if(arr[i] > arr[1]){
            returnArr.push(arr[i])
        }
    }
    return returnArr
}

// returns [5,4,67]
console.log('returnArr', valuesGreaterThanSecondGenaralized([1,3,5,4,3,67,-1]))

// returns []
console.log('returnArr', valuesGreaterThanSecondGenaralized([1]))
