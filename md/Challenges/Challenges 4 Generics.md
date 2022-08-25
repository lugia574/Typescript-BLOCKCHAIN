# TypeScript Challenges

Challenge goals:

    Using what you have learned so far, write the call signatures for two functions:

    last(arr): 이 함수는 array의 마지막 아이템을 리턴해야 합니다.

    prepend(arr, item): 이 함수는 array의 시작에 아이템을 넣고, 리턴해야 합니다.

## 4. Generics

그니까 배열을 만들고 거기에 마지막 함수 출력하는 function 하나

배열 첫 인덱스에 넣고 리턴하라는게 뭘 리턴하라는거야 배열이겟지?

```ts
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
```
