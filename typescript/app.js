"use strict";
const user = {
    login: 'a@a.ru',
    password: '1'
};
function multiply(first, second) {
    // мы могли сказать second?: number = 5
    if (!second) {
        return first * first;
    }
    return first * second;
}
multiply(5);
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
}
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiply(5); // ?? проверяет, если парамс нулл или андефайнд - умножить на 5, если да
}
