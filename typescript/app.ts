// Extends 

// Чрезмерное наследование создаст связность кода, которую придется распутывать

type PaymentStatus = 'new' | 'paid';

class Payment {
	id: number;
	status: PaymentStatus = 'new';

	constructor(id: number) {
		this.id = id;
	}

	pay() {
		this.status = 'paid';
	}
}

class PersistedPayment extends Payment { // частое использование с добавление персистных данных
	databaseId: number;
	paidAt: Date;

	constructor() {
		const id = Math.random();
		super(id); // обращаемся к конструктору и начинаем конструировать с идентификатором
	}

	save() {
		// Сохраняет в базу
	}

	override pay(date?: Date) { // если дата обязательная, то ошибка 
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
	name: string = 'user'; // сначала инициализируется свойство

	constructor() { // затем конструктор
		console.log(this.name);
	}
}

class Admin extends User { // потом класс
	name: string = 'admin'; // и только потом свойство

	constructor() {
		super(); // должен быть первым, если есть другие действия 
		console.log(this.name);
	}
}

new Admin();

new Error('');

class HttpError extends Error {
	code: number;
	constructor(message: string, code?: number) {
		super(message);
		this.code = code ?? 500;
	}
}