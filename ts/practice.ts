interface User2 {
  firstName: string;
  lastName: string;

  sayHi(name: string): string;
  fullName(): string;
}

class Player2 implements User2 {
  constructor(public firstName: string, public lastName: string) {}

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `${name} Hi.. hahaha.. my name is ${this.fullName()}`;
  }
}
