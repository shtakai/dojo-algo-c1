function fitTheArray(arr){
    if(arr[0] > arr.length){
        console.log("Too big!")
    }else if(arr[0] < arr.length){
        console.log("Too small!")
    }else{
        console.log("Just right")
    }
}

fitTheArray([4,2,3,4,5])
fitTheArray([6,2,3,4,5])
fitTheArray([5,2,3,4,5])
