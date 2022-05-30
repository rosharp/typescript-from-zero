function getFullName(firstName: string, lastName: string) {
	if (typeof firstName !== 'string') {
		throw new Error('Bad');
	} // Почти бесполезная проверка для ТС
	return `${firstName} ${lastName}`;
}

const getFullNameArrow = (firstName: string, lastName: string): string => {
	return `${firstName} ${lastName}`;
}

console.log(getFullName('Pyotr', 'The First'));

// Без явной конвертации типа его перемена произойти не может - в этом отличие статичной типизации ТС от динамичной в ЖС
