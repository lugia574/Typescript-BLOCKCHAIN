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

interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};

  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  claer() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();
