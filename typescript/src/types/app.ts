// встроенные дженерики
// зачем нужны и как используются
// зачем нужны обобщения с точки зрения типов
// в жс нет необходимости в типизации, но когда она появляются
// нужны обощения, которые повозволят переиспользовать код

const a: Array<number> = [1, 2, 3];

async function test() {
	const b = new Promise<number>((resolve, reject) => {
		resolve(1);
	})
}

const check: Record<string, boolean> = {
	drive: true,
	kpp: false
}
