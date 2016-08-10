let arr = [1, 3, 5, 7, 9, 13]

function valuesGreaterThanSecond(arr){
    let count = 0
    for(let i in arr){
        if(arr[i] > arr[1]){
            console.log(arr[i])
            count += 1
        }
    }
    return count
}

console.log('count',valuesGreaterThanSecond(arr))
