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

import addr = UserModule.AddressModule;
console.log(addr.zip);