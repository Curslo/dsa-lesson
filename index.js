const studentDatabase = ["john", "peter", "jane", "erick", "grace"];

function findStudent(allStudents, studentName) {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Found ${studentName}`);
    }
  }
}

findStudent(studentDatabase, "grace");

//o(n)

const numbers = [1, 2, 3, 4, 5];

function getElement(arr, index) {
  return arr[index];
}

console.log(getElement(numbers, 1));

//O(n2)
function findPairs(Pair) {
  for (let i = 0; i < Pair.length; i++) {
    for (let j = i + 1; j < Pair.length; j++) {
      console.log(`Pair: ${Pair[i]}, ${Pair[j]}`);
    }
  }
}
const numberPair = [1, 2, 3, 4, 5];
findPairs(numberPair);
