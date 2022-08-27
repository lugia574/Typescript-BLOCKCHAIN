type SuperPrint = (arr: any[]) => any;

const superPrint: SuperPrint = (a) => a[0];

const a = superPrint([6, 5, 4]);
const b = superPrint([6, true, "a"]);
const c = superPrint(["6", true, "a", 6, 5]);

a.toUpperCase();

type Player<E> = {
  name: string;
  extraInfo: E;
};

const nico: Player<{ favFood: string }> = {
  name: "nico",
  extraInfo: {
    favFood: "kakao",
  },
};

abstract class User {
  constructor(
    private firstName: String,
    private lastName: String,
    public nickName: string
  ) {}

  getFullName() {
    return `${this.firstName}  ${this.lastName}`;
  }
}

class Player1 extends User {}

const ex = new Player1("ex", "las", "엑스");

ex.nickName;

const test23: boolean[] = [];

function playerMaker(name: string): string[] {
  return [];
}

const name23 = (): string[] => {
  return [];
};

type last = {
  <T>(arr: T[]): T;
};
type prepend = {
  <T>(arr: T[], item: T): T[];
};

const last: last = (a) => a[a.length - 1];

const prepend: prepend = (arr, item) => {
  arr.unshift(item);

  return arr;
};

const arr = [1, 2, 3, 4, "5", "@@", true];

console.log(last(arr), "이것은 last");
console.log(prepend(arr, 2), "이것은 prepend");

type Words = {
  [key: string]: string;
};

// add, get, delete, update, showAll, count
class Dict {
  private words: Words;

  constructor() {
    this.words = {};
  }

  // add: 단어를 추가함.
  add(word: Words) {
    if (this.words[word.term] === undefined) {
      // undefined 는 사전에 없는가를 묻는거
      this.words[word.term] = word.def;
    }
  }

  //get: 단어의 정의를 리턴함.
  get(term: string) {
    return this.words[term];
  }

  //delete: 단어를 삭제함.
  delete(key: string) {
    delete this.words[key];
  }
  //update: 단어를 업데이트 함.
  update(key: string, summry: string) {
    this.words[key] = summry;
  }
  //showAll: dictionary 의 단어를 모두 프린트함.
  showAll() {
    return console.log(this.words);
  }
  //count: dict 단어들의 총 count 를 리턴함.
}
