# TypeScript Challenges

Challenge goals:

    Typescript Classes 를 사용하여,
    Dict (dictionary) class 를 빌드하세요.
    Dict은 아래와 같은 methods 를 갖고있어야 합니다.

    add: 단어를 추가함.
    get: 단어의 정의를 리턴함.
    delete: 단어를 삭제함.
    update: 단어를 업데이트 함.
    showAll: dictionary 의 단어를 모두 프린트함.
    count: dict 단어들의 총 count 를 리턴함.

## 5. Classes

```ts
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
  add(word: Word) {
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
    //삭제할 단어가 없다면
    if (this.words[key] === undefined) {
      return;
    }
    delete this.words[key];
  }
  //update: 단어를 업데이트 함.
  update(key: string, summry: string) {
    if (this.words[key] === undefined) {
      return;
    }
    this.words[key] = summry;
  }
  //showAll: dictionary 의 단어를 모두 프린트함.
  showAll() {
    return this.words;
  }
  //count: dict 단어들의 총 count 를 리턴함.
  count() {
    return Object.keys(this.words).length;
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

// 객체 생성
const w = new Word("단어1", "정의1");
const w2 = new Word("단어2", "정의2");

const dict = new Dict();

dict.add(w);
dict.add(w2);

dict.get("단어1");
dict.update("단어1", "정의3");

console.log("count: ", dict.count());

dict.delete("단어1");

console.log("showAll: ", dict.showAll());
```

이렇게 함

```ts
type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(term: string, definition: string) {
    if (!this.words[term]) {
      this.words[term] = definition;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    delete this.words[term];
  }
  update(term: string, newDef: string) {
    if (this.words[term]) {
      this.words[term] = newDef;
    }
  }
  showAll() {
    Object.keys(this.words).forEach((term) =>
      console.log(`${term}: ${this.words[term]}`)
    );
  }
  count() {
    return Object.keys(this.words).length;
  }
}

const dictionary = new Dict();

dictionary.add("김치", "밋있는 한국 음식");
dictionary.showAll();
console.log(dictionary.count());
dictionary.update("김치", "밋있는 한국 음식!!!");
console.log(dictionary.get("김치"));
dictionary.delete("김치");
console.log(dictionary.count());
```

답은 이럼
