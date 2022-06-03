function logId(id: string | number): void {
  console.log(id);
}

const a = logId(1); // void

function multiply(f: number, s?: string): number | void {
  if (!s) {
    return f * f;
  }
}

type voidFunc = () => void; // можем вернуть что угодно, но этот возврат будет игнорироваться

const f1: voidFunc = () => {}

const f2: voidFunc = () => {
  return true
}

const b = f2(); // void

const skills = ['Dev', 'DevOps']

const user = {
  s: ['']
}

skills.forEach((skill) => user.s.push(skill));