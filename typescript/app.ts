// Implements 

// Логировать можно по-разному, но важно, чтобы использовался обязательный метод log / Error

// Отделение реализации конкретного логгера от реализации в коде или присвоение каких-либо определенных классов

interface ILogger {
	log(...args): void
	error(...args): void;
} // + dependency ejections method

class Logger implements ILogger {
	log(...args: any[]): void {
		console.log(...args);
	}
	async error(...args: any[]): Promise<void> {
		// Кинуть во внешнюю систему
		console.log(...args);
	} // realize ILogger interface 
} // Имплементированные методы могут быть асинхронными

interface IPayable {
	pay(paymentId: number): void;
	price?: number;
}

interface IDeletable {
	delete(): void;
}
class User implements IPayable, IDeletable {
	delete(): void {
		/// Delete
	} // не все свойства будут автоматически имплементированы
	pay(paymentId: number): void { // тип здесь должен быть шире: number | string
		///
	}
	price?: number | undefined;
}
