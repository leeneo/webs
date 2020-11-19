"use strict";
exports.__esModule = true;
exports.TsDemo = void 0;
var TsDemo;
(function (TsDemo) {
    function greeter(person) {
        return "Hello," + person.firstName + ' ' + person.lastName;
    }
    var user = { firstName: 'David', lastName: 'Edward' };
    document.body.innerHTML = greeter(user);
})(TsDemo = exports.TsDemo || (exports.TsDemo = {}));
