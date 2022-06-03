"use strict";
// never - никогда не будет присвоено
function generateError(message) {
    throw new Error(message);
}
function dumpError() {
    // return '' => error
    while (true) { }
}
function rec() {
    return rec();
}
const a = undefined;
function processAction(action) {
    switch (action) {
        case 'refund':
            // ...
            break;
        case 'checkout':
            // ...
            break;
        case 'reject':
            // ...
            break;
        default:
            const _ = action;
            throw new Error('Action not found');
    }
}
function isString(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    generateError('Incorrect type'); // Исчерпывающая проверка
}
