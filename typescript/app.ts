const skill: readonly [number, string] = [1, 'Dev'];
// readonly - немодифицируемый

// let a = 5;
// a = 6;
// // Переопределение константы - ошибка

const skills: readonly string[] = ['Dev', 'DevOps'];
// skills[0] = ''; - будет невозможно

// Когда есть какое-то свойство класса, которое должно быть сохранено - можно использовать

// Альтернативная generics-запись - равносильно ридонли записи 
const somethings : ReadonlyArray<string> = ['wow', 'hello'];

// somethings.push('hewwow'); - тоже невозможно
