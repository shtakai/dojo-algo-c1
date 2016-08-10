function firstPlusLength(arr){
    return arr[0] + arr.length
}

// normal number : 1 + 8 => 9
console.log(firstPlusLength([1,2,3,4,5,6,7,8]))

// first is "what" : 'what?' + 8 => 'what?8'
console.log(firstPlusLength(['what?', 2,3,4,5,6,7,8]))

// first is false : false + 8 => 0 + 8 => 8
console.log(firstPlusLength([false, 2,3,4,5,6,7,8]))

// first is true : true + 8 => 1 + 8 => 9
console.log(firstPlusLength([true, 2,3,4,5,6,7,8]))
