// type httpMethod = 'post' | 'get'; 

// type coolString = string;

// function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
//   return 1;
// }

// fetchWithAuth('asdf', 'post');

// let method = 'post';

// fetchWithAuth('s', method as 'post'); // если передать что-то другое, то типизация сломается

type User = {
  name: string,
  age: number,
  skills: string[]
};

type Role = {
  id: number
}

type UserWithRole = User & Role;

let user: UserWithRole = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  id: 1
};
