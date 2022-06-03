// помогает в каждой проверке определнный тип, через который можно будет обращаться к нужным свойствам и к нужным объектам

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

function logId(id: string | number) {
  if (isString(id)) {
    console.log(id);
  } else if (typeof id === 'number') {
    console.log(id);
  }
}

// type guard
function isString(x: string | number): x is string {
  return typeof x === 'string';
}

function isAdmin(user: User | Admin): user is Admin {
  return 'role' in user;
}

function isAdminAlternative(user: User | Admin): user is Admin {
  return (user as Admin).role !== undefined;
}

function setRoleZero(user: User | Admin) {
  if (isAdmin(user)) {
    user.role = 0;
  } else {
    throw new Error('The user is not Admin');
  }
}
