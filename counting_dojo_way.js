for(let i = 1; i <= 100; i++){
    let result = ''
    if(i % 5 == 0) {
        result += "Coding"
    }
    if(i % 10 == 0){
        result += " Dojo"
    }
    if(result === ''){
        result = i
    }
    console.log(result)
}
