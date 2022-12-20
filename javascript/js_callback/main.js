let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filter(numbers, callback) {
    let results = [];
    for (let i=0; i < numbers.length; i++) {
        if (callback(numbers[i])) {
            results.push(numbers[i]);}
        }
    return results;
}

const evens = filter(numbers, (n)=>{return n%2===0}) // [2, 4, 6, 8]
const odds = filter(numbers, (n)=>{return n%2!==0}); // [1, 3, 5, 7]
const odd = filter(numbers, (n)=>{return n%3===0});  // [3, 6, 9]