// позволяет писать еще один вариант extends, обернутый в функцию
// его преимущество: дополнительный тайп-чекинг и возможность
// миксить свосйства сразу нескольких классов

// хороши, когда необходимо взять элементы из двух разных областей
// и совместить функционал

type Contructor = new (...args: any) => {}
type GContructor<T = {}> = new (...args: any) => T

class List {
	constructor(public items: string[]) {}
}

class Accordion {
	isOpened: boolean;
}

type ListType = GContructor<List>; 
type AccordionType = GContructor<Accordion>; 

class ExtendedListClass extends List {
	first() {
		return this.items[0];
	}
}

function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
	return class ExtendedList extends Base {
		first() {
			return this.items[0];
		}
	}
}
class AccordionList {
	isOpened: boolean;
	constructor(public items: string[]) {}
}

const list = ExtendedList(AccordionList);
const res = new list(['first', 'second']);
console.log(res.first());
