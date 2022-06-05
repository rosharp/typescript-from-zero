// Для 1-3 реализаций

class User {
  name: string;
  age: number;

  constructor();
  constructor(name: string);
  constructor(age: number); // Конструктор реализации
  constructor(name: string, age: number);

  constructor(ageOrName?: string | number, age?: number) { // Конструктор имплементации
    if (typeof ageOrName === "string") {
      this.name = ageOrName;
    } else if (typeof ageOrName === "number") {
      this.age = ageOrName;
    }

    if (typeof age === 'number') {
      this.age = age;
    }
  }
}

const user = new User("Vasya");
const user2 = new User();
const user3 = new User(33);
