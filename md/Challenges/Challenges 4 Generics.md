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

대충 폼은 이렇고

리액트로 좀 이쁘게 꾸밀라고 했는데

좀 귀찮아서 걍 냄

useStete 랑 쓸려고 하니까 좀 걸리네

```ts
// Last

type Last = <T>(items: T[]) => T;

const last: Last = (items) => items[items.length - 1];

const lastItem = last([1, 2, 3, 4, 5]);

console.log(lastItem);

// Prepend

type Prepend = <T>(items: T[], item: T) => T[];

const prepend: Prepend = (items, item) => [item, ...items];

const items = [1, 2, 3, 4, 5];

const newItems = prepend(items, 0);

console.log(newItems);
```

정답은 이렇단다

```ts
  <T>(arr: T[], item: T): T[];
  <T>(items: T[], item: T) => T[];
```

이거 차이가 있나? 없는거 같은데

그럼 뭐 맞는듯
