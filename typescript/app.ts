let a = 5;
let b: string = a.toString();
let e = new String(a).valueOf();
let f: boolean = new Boolean(a).valueOf();

let c = 'sdff';
let d: number = parseInt(c);

interface User {
  name: string;
  email: string;
  login: string;
}

const user: User = {
  name: 'Vasya',
  email: 'vasily@gmail.com',
  login: 'vasya'
} as User;

interface Admin {
  name: string;
  role: number;
}

const admin: Admin = {
  ...user,
  role: 1
}

function userToAdmin(user: User): Admin {
  return {
    name: user.name,
    role: 1
  }
}
