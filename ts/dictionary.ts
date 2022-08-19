// dictionary 만들기

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;

  constructor() {
    this.words = {};
  }

  // 단어 추가 메소드
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      // undefined 는 사전에 없는가를 묻는거
      this.words[word.term] = word.def;
    }
  }

  // 단어 보여주기

  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

// 객체 생성
const fucking = new Word("퍽킹", "엿머겅");

const dict = new Dict();

dict.add(fucking);

dict.def("퍽킹");
