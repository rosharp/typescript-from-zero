class User {
	role: 'admin' | 'user';
	constructor(public name: string) {
		this.name = name;
	}

	login(): void;
}

	function createUser(user: User) { // noUnusedParameters будет предупреждать о неиспользованных параметрах
		// logic

		const defaultUser = new User('default'); // noUnusedLocals позволит избавиться от неиспользованных переменных
		defaultUser.role = undefined; // exactOptionalPropertyTypes 

		switch(user.role) {
			case 'admin':
				// noFallthroughCasesInSwitch => если нет ни ретурна, ни брейка, то провала не будет 
			case 'user':
				return true;
				const c = 1; // allowUnreachableCode выключит предупреждения при недостижимом коде
		}
	}

interface IChecks {
	[check: string]: boolean;
}

const c: IChecks = { 'kpp': true };
const d = c['drive']; // noUncheckedIndexedAccess => Add 'undefined' to a type when accessed using an index

class VipUser extends User {
	login(): void // noImplicitOverride => error
}
