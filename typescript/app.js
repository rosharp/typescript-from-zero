"use strict";
// Для 1-3 реализаций
class User {
    constructor(ageOrName, age) {
        if (typeof ageOrName === "string") {
            this.name = ageOrName;
        }
        else if (typeof ageOrName === "number") {
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
