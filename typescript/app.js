"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstName} ${userEntity.lastName} ${userEntity.city} ${userEntity.age}`;
}
// Без явной конвертации типа его перемена произойти не может - в этом отличие статичной типизации ТС от динамичной в ЖС
const user = {
    firstName: "Pyotr",
    lastName: "The First",
    city: "Saint-P",
    age: 42,
    skills: {
        dev: true,
        devops: true,
    },
};
console.log(getFullName(user));
