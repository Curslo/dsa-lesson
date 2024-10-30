const chunk = (array, size) => {
    let chunked = [];
    let index = 0;
    while(index < array.length) {
        const chunks = array.slice(index, index + size);
        console.log('------', chunks)
        chunked.push(chunks)
        index += size;
    }
    return chunked
}

const myArray = [1,2,3,4,5,6,7,8,9]

console.log(chunk(myArray, 3))