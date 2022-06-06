// protected дает доступ для наследников
// private доступен только изнутри функции
// можно использовать и с функциями

class Vehicle {
	public maker: string; // public is optiotnal
	private damages: string[]; // приватность актуальна только для тайпа
	private _model: string;
	protected run: number; // внутри класса можем обращаться, извне - нет 

	#price: number; // приватное свойство в JS 

	set model(m: string) {
		this._model = m;
		this.#price = 100;
	}

	get model() {
		return this._model; 
	}

	isPriceEqual(v: Vehicle) {
		return this.#price === v.#price; // проверка эквивалентности приватных свойств даже с внешними объектами
	}

	addDamage(damage: string) {
		this.damages.push(damage);
	}
}

class EuroTruck extends Vehicle {
	setDamage() {
		// 	
	}

	setRun(km: number) {
		this.run = km / 0.62;
		// this.damage => error
	}
}
