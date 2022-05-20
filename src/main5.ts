//関数
/*
void
 */

// function add(a: number, b: number): number {
//     return a + b;
// }

// function add(a: number, b?: number): number {
//     if (b) {
//         return a + b;
//     } else {
//         return a + a;
//     }
// }

function add(a: number, b: number = 10): number {
    return a + b;
}
//console.log(add(5, 3)); // 8
//console.log(add(5, "hello"));
// console.log(add(6, 6)); // 12
// console.log(add(3)); // 6
console.log(add(5, 5)); // 10
console.log(add(3)); // 13