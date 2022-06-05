// Getter and setter

// Позволяют переопределить то, как будут составляться свойства объекта

// If async is needed => use methods, not getters or setters

class User {
  _login: string;
  password: string;
  createdAd: Date;

  // cannot be async
  set login(l: string | number) {
    this._login = 'user-' + l;
    this.createdAd = new Date();
  } // if nothing here => readonly

  // set password(p: string) {
  //   // sync => blocking JS
  // }

  async getPassword(p: string) {

  }  

  get login() {
    return this._login;
  }
}

const user = new User();
user.login = 'myLogin';
console.log(user);
console.log(user.login);
