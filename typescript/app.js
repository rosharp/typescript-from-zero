"use strict";
// преимущество в том, что методы и классы внутри абстрактного класса необязательно должны быть абстрактными
// интерфейсы могут только описывать, функционала в них быть не может
// плюс внутри можно вызывать абстрактные классы
class Controller {
    handleWithLogs(req) {
        console.log('Start');
        this.handle(req);
        console.log('End');
    }
}
class UserController extends Controller {
    handle(req) {
        console.log(req);
    } // if no handle => error
}
// new Controller() => error, инстанциируются только наследники
const c = new UserController();
c.handleWithLogs('Request');
