const fizzbuzz = (n) => {
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if(i % 3 === 0) {
            console.log("Fizz")
        }else if(i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log(fizzbuzz(15))