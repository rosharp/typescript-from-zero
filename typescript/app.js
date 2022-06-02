"use strict";
// enum RequestType {
//   GET = 'get',
//   POST = 'post'
// }
// на каждый чих делать енам не надо
function fetchWithAuth(url, method) {
    return 1;
}
fetchWithAuth('asdf', 'post');
// fetchWithAuth('asdf', 'fda'); - если есть что-то другое, кроме как в литерале, то ошибка
const a = 'asd'; // типом будет значение
// ничего будет не присвоить
let method = 'post';
fetchWithAuth('s', method); // если передать что-то другое, то типизация сломается
