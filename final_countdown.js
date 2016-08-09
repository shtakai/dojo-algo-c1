function finalCountdonw(param1, param2, param3, param4){
    for(let i = param2; i <= param3 ; i++){
        if(i % param1 == 0 && i != param4) {
            console.log(i)
        }
    }
}

finalCountdonw(3,5,17,9)
