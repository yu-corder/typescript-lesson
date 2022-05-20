"use strict";
//関数のオーバーロード
function add3(a, b) {
    if (typeof a == "string" && typeof b == "string") {
        return a + " " + b;
    }
    return a + b;
}
console.log(add3(5, 3)); // 8
console.log(add3("hello", "world")); //hello world
