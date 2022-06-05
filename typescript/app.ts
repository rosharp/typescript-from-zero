class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User('Vasya');
console.log(user);
user.name = 'Petya';
console.log(user);

class Admin {
    role: number;

    // constructor(role: number) {
    //   this.role = role;
    // }
}

const admin = new Admin();
admin.role = 1;
