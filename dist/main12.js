"use strict";
// Generics
class MyData {
    constructor(value) {
        this.value = value;
    }
    getArray() {
        return [this.value, this.value, this.value];
    }
}
// var v1 = new MyData<string>("hello");
// console.log(v1.getArray());
// var v2 = new MyData<number>(3);
// console.log(v2.getArray());
// var v3 = new MyData<Result>({a: 32, b: 16});
// console.log(v3.getArray()); 
var v4 = new MyData({ a: 32, b: 16, c: "hello" });
console.log(v4.getArray());
