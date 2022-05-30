"use strict";
const skills = ['Dev', 'DevOps', 'Testing']; // Не просто массив, а массив строк
for (let skill of skills) {
    console.log(skill.toUpperCase());
}
const res = skills
    .filter((s) => s !== 'DevOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(res);
