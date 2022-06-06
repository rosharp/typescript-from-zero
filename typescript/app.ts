class User {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

class Users extends Array<User> {
	searchByName(name: string) {
		return this.filter(u => u.name === name);
	}

	override toString(): string {
		return this.map(u => u.name).join(', ');
	}
}

const users = new Users();
users.push(new User('Vasya'));
users.push(new User('Petya'));
console.log(users.toString());

class UserList {
	users: User[];

	push(u: User) {
		this.users.push(u);
	}
}

class Payment {
	date: Date;
}

class UserWithPayment extends Payment { // код становится менее гибким из-за жесткого наследования
	name: string; // в дальнейшем будет все больше конфликтов свойств
}

class UserWithPaymnet2 { // аггрегационный класс, который может иметь полностью свои методы, которые он жестко не связывает
	user: User;
	payment: Payment;

	constructor(user: User, payment: Payment) {
		this.payment = payment;
		this.user = user;
	}
}

// наследование лучше в рамках одной доменной области
// не нужно, когда наследование происходит из сложных аггрегационных классов
// наследование от стандартных классов, как еррор, можно использовать
// следует использовать наследование, когда происходит переход из одной доменной области в другую
// это увеличит связность кода
