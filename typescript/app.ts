// static

// позволяет делать свойства или методы статичными

// утилитарные функции или переменные лучше писать как функции или переменные, а не в статике

class UserService {
	// static name: string = 'sdf'; => error, conflict
	static db: any;

	static async getUser(id: number) { // статичное свойство может быть асинхронным
		return UserService.db.findById(id);
	}

	constructor(id: number) { // не можем передать статичные данные

	}

	create () { // можем обращаться к статичным сервисам1
		UserService.db;
	}

	static { // инициализатор статичного блока
		// await new Promise() => error
	}
} // нет необходимости обращаться к нему

// no need for instance
// все будет обращаться к одному и тому же объекту в системе
UserService.getUser(1);

const inst = new UserService(1);
inst.create();
