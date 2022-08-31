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

interface LocalStorageStorage<T> {
  [key: string]: T;
}

//LocalStorageAPI >> setItem, getItem, clearItem, clear
interface LocalStorageAPI<T> {
  setItem(key: string, value: T): void;

  getItem(key: string): T;

  clearItem(key: string): void;

  clear(): void;
}

// GeolocationAPI >> getCurrentPosition, watchPosition, clearWatch
interface GeolocationAPI<T> {
  getCurrentPosition(success: T, error?: T, options?: T): string;

  watchPosition(success: T, error?: T, options?: T): string;

  clearWatch(id: string): void;
}

class LocalStorageAPI<T> implements LocalStorageAPI<T> {
  private storage: LocalStorageStorage<T> = {};

  setItem(key: string, value: T): void {
    if (this.storage[key] === undefined) {
      this.storage[key] = value;
    }
  }

  getItem(key: string) {
    return this.storage[key];
  }

  clearItem(key: string): void {
    delete this.storage[key];
  }

  clear(): void {
    this.storage = {};
  }
}

class GeolocationAPI<T> implements GeolocationAPI<T> {
  getCurrentPosition(
    success: T,
    error?: T | undefined,
    options?: T | undefined
  ): string {
    return "test";
  }

  watchPosition(
    success: T,
    error?: T | undefined,
    options?: T | undefined
  ): string {
    return "test";
  }

  clearWatch(id: string): void {}
}
