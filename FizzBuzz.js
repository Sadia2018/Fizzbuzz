
function fizzbuzz() {
    for (var i = 1; i < 10; i++) {
        if (i % 5 === 0) {
            console.log("Buzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else {
            console.log(i);
        }
        
    }
}
fizzbuzz() 


 