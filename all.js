var UserModule;
(function (UserModule) {
    UserModule.name = "toda";
    var AddressModule;
    (function (AddressModule) {
        AddressModule.zip = "111-111";
    })(AddressModule = UserModule.AddressModule || (UserModule.AddressModule = {}));
})(UserModule || (UserModule = {}));
//内部モジュール
// module UserModule {
//     export var name = "toda";
//     export module AddressModule {
//         export var zip = "111-111";
//     }
// }
/// <reference path="./user.ts" />
console.log(UserModule.name);
// console.log(UserModule.AddressModule.zip);
var addr = UserModule.AddressModule;
console.log(addr.zip);
