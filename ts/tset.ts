let b: boolean;

b = false;

let c: number[];

class Person {
  name: string;

  constructor(name: string) {
    // 클래스 프로퍼티의 선언과 초기화
    this.name = name;
  }
}

const player: {
  name: string;
  age?: number;
} = {
  name: "hahaha",
};

const num: readonly number[] = [1, 2, 3, 4];

console.log(1 + num[0]);
