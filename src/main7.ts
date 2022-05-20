//関数のオーバーロード

function add3(a: number, b: number): number; //シグネチャ
function add3(a: string, b: string): string;

function add3(a: any, b: any): any {
    if (typeof a == "string" && typeof b == "string") {
        return a + " " + b;
    }
    return a + b;
}

console.log(add3(5, 3));// 8
console.log(add3("hello", "world")); //hello world

