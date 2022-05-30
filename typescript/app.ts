const skill: [number, string] = [1, 'Dev'];
// const id = skill[0];
// const skillName = skill[1];
// // const q = skill[2]; - к нему мы обратиться не можем

// skill.push('Testing');
// // const third = skill[2]; - все равно не можем, кортеж уже типизирован
// skill.pop();

const [id, skillName] = skill; // деструктуризация, как в реакте - удобно вытаскивать элементы из кортежей

const arr: [number, string, ...boolean[]] = [1, 'something', true, true, false]
// Производное число boolean через spread operator
