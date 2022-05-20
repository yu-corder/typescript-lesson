//列挙型
//signal

// enum Signal {
//     Red = 0,
//     Blue = 1,
//     Yello = 2
// }

enum Signal {
    Red, // 0
    Blue = 3,
    Yellow // 4
}

enum Signal {
    Green = 5
}

// var result: Signal;

// if (result === Signal.Yellow) { ... }
// if (result === Signal['Yellow]) { ... }

console.log(Signal[4]); // Yellow
console.log(Signal[3]); // Blue
console.log(Signal.Green); //5