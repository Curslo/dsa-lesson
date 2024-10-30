class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length
    }
    get(index) {
        return this.data[index];
    }
    pop() {
        delete this.data[this.length -1];
        this.length--;
        return this.length && this.data;
    }
    shift() {
        const firdtItem = this.data[0]
        for(let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length -1];
        this.length--;
        return this.firdtItem
    }
    
    deleteByIndex(index) {
        const item = this.data[index]
        for(let i=0; i<this.length; i++) {
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length - 1];
        this.length--
        return item;
    }
}

const myNewArray = new MyArray();
myNewArray.push('alex')
myNewArray.push('grace')
myNewArray.push('john')
myNewArray.push('peter')
myNewArray.pop()

console.log(myNewArray)
console.log(myNewArray.shift())
console.log(myNewArray.deleteByIndex(0))
console.log(myNewArray)