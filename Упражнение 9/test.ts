// Необходимо написать функцию сортировки любых
// объектов, которые имеют id по убыванию и по возрастанию

const data = [
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 3, name: 'Надя' },
];

interface ID {
	id: number
}

function sortById<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
	// return data.sort((first, second) => 0 - (first.id > second.id ? -1 : 1));
	return data.sort((a, b) => {
		switch (type) {
			case 'asc':
				return a.id - b.id;
			case 'desc':
				return b.id - a.id;
		}
	})
}

console.log(sortById(data));
console.log(sortById(data, 'desc'));
