import * as lib from "@beenotung/tslib";

document.writeln("ready");
document.writeln("<br>live reload? sometime :/");
console.log({lib});
console.log("abc like b?", lib.str_like("abc", "b"));
console.log("b like abc?", lib.str_like("b", "abc"));
