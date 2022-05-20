// Interface -> class
interface GameUser {
    score: number;
    showScore(): void;
}

class User2 implements GameUser{
    name: string;
    score: number;
    constructor (name: string, score: number) {
        this.name = name;
        this.score = score;
    }
    sayHi(): void {
        console.log("hi! I am " + this.name);
    }
    showScore(): void {
        console.log("score " + this.score);
    }
}

var yuya = new User2("tom", 3);
yuya.sayHi();
yuya.showScore();