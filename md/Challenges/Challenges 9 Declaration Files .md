# TypeScript Challenges

오늘의 강의: Typescript로 블록체인 만들기: From #5.3

오늘의 과제: 위의 강의를 시청하신 후, 아래 코드 챌린지를 제출하면 됩니다.

Goal of the Challenge:

    Your task is to translate the JSDoc comments of the following files to Typescript Type Declarations

- head.js: https://github.com/lodash/lodash/blob/master/head.js

- hasIn.js: https://github.com/lodash/lodash/blob/master/hasIn.js

- isBoolean.js: https://github.com/lodash/lodash/blob/master/isBoolean.js

- toString.js: https://github.com/lodash/lodash/blob/master/toString.js

- split.js: https://github.com/lodash/lodash/blob/master/split.js

- hasPath.js: https://github.com/lodash/lodash/blob/master/hasPath.js

- filter.js: https://github.com/lodash/lodash/blob/master/filter.js

- every.js: https://github.com/lodash/lodash/blob/master/every.js

- map.js: https://github.com/lodash/lodash/blob/master/map.js

You do not have to implement the function, only make the type declarations

## 9. Declaration Files

```ts
declare module "lodash" {
  interface Array {
    array: [];
  }
  function head(array: Array): any | undefined;
  function hasIn(object: Object, key: string): boolean;
  function isBoolean(value: any): boolean;
  function toString(value: any): string;
  function split(
    string: string,
    separator: RegExp | string,
    limit: number
  ): Array;
  function hasPath(object: Object, path: Array | string): boolean;
  function filter(array: Array, predicate: Function): Array;
  function every(array: Array, predicate: Function): boolean;
  function map(array: Array, predicate: Function): Array;
}
```

이렇게 하는게 맞을려나

하면서도 맞게 했지를 모르겠네
