//関数
/*
var add2 = function(a: number, b: number): number {
    return a + b;
}
グローバル関数？
ファイルを跨いで関数名の重複エラーが発生した。

*/

// var add2 = (a: number, b: number): number => {
//     return a + b;
// }

var add2 = (a: number, b: number): number => a + b;


console.log(add2(5, 3));