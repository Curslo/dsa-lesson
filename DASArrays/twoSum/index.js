const twoSum = (array, target) => {
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[i] + array[j] === target) {
                return [i, j]
            }
        }
    }
}

const myArray = [1,2,3,4,5,6,7,8,9]
console.log(twoSum(myArray, 15))