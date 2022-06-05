"use strict";
// Getter and setter
// Позволяют переопределить то, как будут составляться свойства объекта
class User {
    set login(l) {
        this._login = 'user-' + l;
    }
    get login() {
        return 'no_login';
    }
}
const user = new User();
user.login = 'myLogin';
console.log(user);
console.log(user.login);
