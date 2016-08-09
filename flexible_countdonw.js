function flexibleCondition(lowNum, highNum, mult){
    for(let i = highNum; i >= lowNum; i-=mult){
        console.log(i)
    }
}

flexibleCondition(2, 9, 3)
