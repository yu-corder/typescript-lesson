"use strict";
//内部モジュール
var UserModule;
(function (UserModule) {
    UserModule.name = "toda";
    let AddressModule;
    (function (AddressModule) {
        AddressModule.zip = "111-111";
    })(AddressModule = UserModule.AddressModule || (UserModule.AddressModule = {}));
})(UserModule || (UserModule = {}));
console.log(UserModule.name);
console.log(UserModule.AddressModule.zip);
