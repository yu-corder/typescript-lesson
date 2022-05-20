"use strict";
class User2 {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    sayHi() {
        console.log("hi! I am " + this.name);
    }
    showScore() {
        console.log("score " + this.score);
    }
}
var yuya = new User2("tom", 3);
yuya.sayHi();
yuya.showScore();
