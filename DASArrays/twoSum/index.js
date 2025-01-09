const twoSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
};

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(twoSum(myArray, 15));

// Map method
const twoSumMap = (arr, target) => {
  let map = new Map()
  for(let i=0; i<arr.length; i++) {
    const complement = target - arr[i];
    if(map.has(complement)) {
      return [map.has(complement, i)]
    }
    map.set(arr[i], i)
  }
  return []
}

//Given an array of Student names, and a student.
//Find the student name within that array of students.

//Solution
//Create a function that take arr and name
//Initialize a Student object that is empty
//Within that function, I itterate through the given array searching for the given student name.
//Condition: If student name is found, return studentname and the index
//If the the student name is not found, return null
//Push the returned result into the Hashmap



const findStudent = (arr, name) => {
    console.log(myArr)
  let student = null;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    if (arr[i] === name) {
      student = { name, i };
      console.log(name)
    }
  }
  return student
};

const myArr = ["Richard", "Kisivii", "Sammy"];

console.log(findStudent(myArr, "Richard"));
