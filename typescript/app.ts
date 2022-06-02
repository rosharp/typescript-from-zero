// interface User {
//   name: string,
//   age: number,
// };

// interface User {
//   age: number,
// } // Один интерфейс дополняет другой

// const user: User = {
//   name: 'as',
//   age: 33,
// }

type ID = string | number; // работает с примитивными типами

interface IDI { // нельзя заэкстендить от примитивных типов
  ID: string | number; // должен работать с описаниями классов и сложными типами
}