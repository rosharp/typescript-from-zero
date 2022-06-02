"use strict";
function fetchWithAuth(url, method) {
    return 1;
}
fetchWithAuth('asdf', 'post');
let method = 'post';
fetchWithAuth('s', method); // если передать что-то другое, то типизация сломается
