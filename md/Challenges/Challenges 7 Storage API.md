# TypeScript Challenges

오늘의 강의: Typescript로 블록체인 만들기: From #4.5

오늘의 과제: 위의 강의를 시청하신 후, 아래 코드 챌린지를 제출하면 됩니다.

Challenge goals

    classes 그리고 interfaces 를 활용하여, 아래 API를 위한 '미니' 버전을 구현하세요.

    LocalStorage API
    Geolocation API

- LocalStorage API:

Use abstract classes and generics.

```ts
localStorage.setItem(<key>, <value>)
localStorage.getItem(<key>)
localStorage.clearItem(<key>)
localStorage.clear()
```

Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Storage

Geolocation API:

Use overloading.

```ts
geolocation.getCurrentPosition(successFn);
geolocation.getCurrentPosition(successFn, errorFn);
geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
geolocation.watchPosition(success);
geolocation.watchPosition(success, error);
geolocation.watchPosition(success, error, options);
geolocation.clearWatch(id);
```

Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation

## Storage API 구현

```ts
interface LocalStorageAPI {}
interface GeolocationAPI {}
```
