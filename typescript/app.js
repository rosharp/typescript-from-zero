"use strict";
// Extends 
class Payment {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistedPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id); // обращаемся к конструктору и начинаем конструировать с идентификатором
    }
    save() {
        // Сохраняет в базу
    }
    pay(date) {
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
// override - переопределение метода
// если не использовать, то понять переобращение можно понять только по супер
// если супер нет, то просто создается новый метод
// override нужен для избежения этой ошибки
new PersistedPayment().pay();
class User {
    constructor() {
        this.name = 'user';
        console.log(this.name);
    }
}
class Admin extends User {
    constructor() {
        super(...arguments);
        this.name = 'admin';
    }
}
new Admin();
