interface User {
  login: string,
  password?: string,
  // ? добавляет опциональность
  // неэквивалентна string | undefined - если удалить пароль в консте, то будет ошибка
}

const user: User = {
  login: 'a@a.ru',
  password: '1'
}

function multiply(first: number, second?: number): number {
  // мы могли сказать second?: number = 5
  if (!second) {
    return first * first;
  } 

  return first * second;
}

multiply(5);

interface UserPro {
  login: string,
  password?: {
    type: 'primary' | 'secondary'
  },
}

function testPass(user: UserPro) {
  const t = user.password?.type;
}

function test(param?: string) {
  const t = param ?? multiply(5); // ?? проверяет, если парамс нулл или андефайнд - умножить на 5, если да
}
