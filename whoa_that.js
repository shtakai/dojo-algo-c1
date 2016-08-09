let sum = 0

for(let i = -300000; i <= 300000; i++){
    sum = (i % 2 == 1) ? sum + i : sum
}
console.log(sum)

sum = 0

for(let i = -300000; i <= 300000; i++){
    if(i % 2 == 1){
        sum += i
    }
}

console.log(sum)
