// enum RequestType {
//   GET = 'get',
//   POST = 'post'
// }

// на каждый чих делать енам не надо

function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
  return 1;
}

fetchWithAuth('asdf', 'post');
// fetchWithAuth('asdf', 'fda'); - если есть что-то другое, кроме как в литерале, то ошибка

const a: 'asd' = 'asd'; // типом будет значение
// ничего будет не присвоить

let method = 'post';

fetchWithAuth('s', method as 'post'); // если передать что-то другое, то типизация сломается

// на рантайме ничего нового не отображается