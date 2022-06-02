interface User {
  name: string,
  age: number,
  skills: string[]

  log: (id: number) => string;
};

interface Role {
  roleId: number
}
interface UserWithRole extends User, Role {
  createdAt: Date;
} // Будет иметь все, как юзер + рол айди

type User2 = {
  name: string,
  age: number,
  skills: string[]

  log: (id: number) => string;
}

let user: UserWithRole = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  roleId: 1,
  createdAt: new Date(),

  log(id) {
    return '';
  }
};

interface UserDic {
  [index: number]: User // у интерфейса index может быть неограниченное число свойств
}

type UserDic2 = {
  [index: number]: User 
}

type ud = Record<number, User>
