// Необходимо написать функцию сортировки любых
// объектов, которые имеют id по убыванию и по возрастанию
var data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
function sortById(data, type) {
    if (type === void 0) { type = 'asc'; }
    // return data.sort((first, second) => 0 - (first.id > second.id ? -1 : 1));
    return data.sort(function (a, b) {
        switch (type) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
        }
    });
}
console.log(sortById(data));
console.log(sortById(data, 'desc'));
