"use strict";
// interface Result {
//     a: number;
//     b: number;
// } 
// function getTotal(result: FinalResult) {
//     return result.a + result.b + result.final;
// }
function getTotal(result) {
    if (result.final) {
        return result.a + result.b + result.final;
    }
    else {
        return result.a + result.b;
    }
}
// var result = {
//     a: 22,
//     b: 58
// }
// console.log(getTotal(result));
