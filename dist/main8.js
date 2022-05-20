"use strict";
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
    constructor(_name) {
        this._name = _name;
        User.count++;
    }
    sayHi() {
        console.log("hi! I am " + this._name);
    }
    get name() {
        return this._name;
    }
    set name(newValue) {
        this._name = newValue;
    }
    static showDescription() {
        console.log("this class is about users");
    }
}
User.count = 0;
class AdminUser extends User {
    constructor(_name, _age) {
        super(_name);
        this._age = _age;
    }
    sayHi() {
        console.log("my age: " + this._age);
        console.log("my name: " + this._name);
        super.sayHi();
    }
}
var tom = new User("Tom");
var bob = new User("Bob");
console.log(User.count);
User.showDescription();
// var tom = new User("Tom");
// console.log(tom.name);
// tom.name = "TOM";
// console.log(tom.name);
// tom.sayHi();
// var bob = new AdminUser("Bob", 23);
// bob.sayHi();
