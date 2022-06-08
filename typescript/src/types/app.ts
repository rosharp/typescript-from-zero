// import { } from '@lib/';

// преимущество в том, что методы и классы внутри абстрактного класса необязательно должны быть абстрактными
// интерфейсы могут только описывать, функционала в них быть не может
// плюс внутри можно вызывать абстрактные классы


abstract class Controller { // модификатор класса
	abstract handle(req: any): void;

	handleWithLogs(req: any) {
		console.log('Start');
		this.handle(req);
		console.log('End');
	}
}

/* @internal */
// исключает некоторые типы в результате эмиттинга тайпсов
class UserController extends Controller {
	handle(req: any): void {
		console.log(req);
	} // if no handle => error
}

// new Controller() => error, инстанциируются только наследники

const c = new UserController();
c.handleWithLogs('Request');
