function fahrenheitToCelcius(fDegrees){
    return (fDegrees-32) * (5.0/9.0)
}

function celciusToFahrenheit(cDegree){
    return ((9.0/5.0) * cDegree) +32.0
}

for(let i = 200; i >= 0; i--){
    console.log('C', i, 'F2C', fahrenheitToCelcius(celciusToFahrenheit(i)), 'C2F', celciusToFahrenheit(i))
}


//console.log('fahrenheitToCelcius')
//console.log(fahrenheitToCelcius(100));
//console.log(fahrenheitToCelcius(90));
//console.log(fahrenheitToCelcius(80));
//console.log(fahrenheitToCelcius(70));
//console.log(fahrenheitToCelcius(60));

//console.log('celciusToFahrenheit')
//console.log(celciusToFahrenheit(0.0))
//console.log(celciusToFahrenheit(10.0))
//console.log(celciusToFahrenheit(20.0))
//console.log(celciusToFahrenheit(30.0))
//console.log(celciusToFahrenheit(40.0))
