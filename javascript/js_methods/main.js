// CAR
// let carBrands =[["Aston Martin Lagonda Ltd", "UK", 2016], ["Audi", "Germany", 2016], ["BMW", "Germany", 2016], ["Chevrolet", "USA", 2016], ["Dodge", "USA", 2016], ["Ferrari", "Italy", 2016], ["Honda", "Japan", 2016], ["Jaguar", "UK", 2016], ["Lamborghini", "Italy", 2016]];
for(let i = 0; i < carBrands.length; i++){
    let x = carBrands[i][0].split('').at(0);
        if( x.toLowerCase() === "a"){
            console.log("brand: " + carBrands[i][0]);
            console.log("country: " + carBrands[i][1]);
            console.log("year: " + carBrands[i][2]);
        }
}
for(let i = 0; i < carBrands.length; i++){
    let x = carBrands[i][1];
        if( x.toUpperCase() === "USA"){
            console.log(carBrands[i][0] + ", " + carBrands[i][1] + ", " + carBrands[i][2]);
        }
}

let carBrands = [
    ["Aston Martin Lagonda Ltd", "UK", 2016],
    ["Audi", "Germany", 2016],
    ["BMW", "Germany", 2016],
    ["Chevrolet", "USA", 2016],
    ["Dodge", "USA", 2016],
    ["Ferrari", "Italy", 2016],
    ["Honda", "Japan", 2016],
    ["Jaguar", "UK", 2016],
    ["Lamborghini", "Italy", 2016],
    ];



let n = prompt(" Ta useg oruulna ")
let x = carS([["Aston Martin Lagonda Ltd", "UK", 2016],
    ["Audi", "Germany", 2016],
    ["BMW", "Germany", 2016],
    ["Chevrolet", "USA", 2016],
    ["Dodge", "USA", 2016],
    ["Ferrari", "Italy", 2016],
    ["Honda", "Japan", 2016],
    ["Jaguar", "UK", 2016],
    ["Lamborghini", "Italy", 2016]
    ]);
    
function carS(carBrands){
    let brands = [];
    for(i=0; i<carBrands.length; i++){
        // for(j=0; j<carBrands[i].length; j++){
            if(carBrands[i][0].charAt(0)  == n){
                // carA = carBrands[i[j]];
                brands.push(carBrands[i])
            }
            // }
        }
        return brands;
    }
console.log(x);