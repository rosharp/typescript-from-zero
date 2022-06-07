// this

class Payment {
	private date: Date = new Date();

	getDate(this: Payment) {
		return this.date;
	}

	getDateArrow = () => {
		return this.date;
	}
}

const p = new Payment();

const user = {
	id: 1,
	paymentDate: p.getDate.bind(p),
	paymentDateArrow: p.getDateArrow
}

console.log(p.getDate());
console.log(user.paymentDate()); // => если без bind - undefined (потеряли контекст)
console.log(p.getDateArrow()); // arrow func => works without .bind

class PaymentPersistent extends Payment {
	save() {
		return super.getDate();
	}
}

console.log(new PaymentPersistent().save());
