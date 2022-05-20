//クラス
// public, protected, private

// class User {
//     // public name: string;
//     // constructor(name: string) {
//     //     this.name = name;
//     // }
//     constructor(public name: string) {
//     }
//     public sayHi(): void {
//         console.log("hi! I am " + this.name);
//     }
// }

class User {
    constructor(protected _name: string) {
        User.count++;
    }
    public sayHi(): void {
        console.log("hi! I am " + this._name);
    }
    get name() {
        return this._name;
    }
    set name(newValue: string) {
        this._name = newValue;
    }
    static count: number = 0;
    static showDescription(): void {
        console.log("this class is about users");
    }
}

class AdminUser extends User {
    private _age: number;
    constructor(_name: string, _age: number) {
        super(_name);
        this._age = _age;
    }
    public sayHi(): void {
        console.log("my age: " + this._age);
        console.log("my name: " + this._name);
        super.sayHi();
    }
}


var tom = new User("Tom");
var bob = new User ("Bob");
console.log(User.count);
User.showDescription();
// var tom = new User("Tom");
// console.log(tom.name);
// tom.name = "TOM";
// console.log(tom.name);
// tom.sayHi();
// var bob = new AdminUser("Bob", 23);
// bob.sayHi();