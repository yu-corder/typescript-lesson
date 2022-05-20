"use strict";
//列挙型
//signal
// enum Signal {
//     Red = 0,
//     Blue = 1,
//     Yello = 2
// }
var Signal;
(function (Signal) {
    Signal[Signal["Red"] = 0] = "Red";
    Signal[Signal["Blue"] = 3] = "Blue";
    Signal[Signal["Yellow"] = 4] = "Yellow"; // 4
})(Signal || (Signal = {}));
(function (Signal) {
    Signal[Signal["Green"] = 5] = "Green";
})(Signal || (Signal = {}));
// var result: Signal;
// if (result === Signal.Yellow) { ... }
// if (result === Signal['Yellow]) { ... }
console.log(Signal[4]); // Yellow
console.log(Signal[3]); // Blue
console.log(Signal.Green); //5
