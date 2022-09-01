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
```

대충 여기까지 했는데

이렇게 하는거 맞나?

흠 흠 흠

솔직히 GeolocationAPI 는 어떻게 하라는건지 잘 감이 안옴

storage 야 저번에도 만들어 봤으니까 걍 대충 했는데

GeolocationAPI 이건 뭐 어쩌라는건지

모르겠다 우선 내고 보자

```ts
// LocalStorage Interface
abstract class LocalStorage<T> {
  protected items: Items<T>;
  constructor() {
    this.items = {};
  }
  abstract length(): number;
  abstract key(index: number): T;
  abstract getItem(key: string): T;
  abstract setItem(key: string, value: T): void;
  abstract removeItem(key: string): void;
  abstract clear(): void;
}
interface Items<T> {
  [key: string]: T;
}
class SuperStorage extends LocalStorage<string> {
  constructor() {
    super();
  }
  public key(index: number) {
    return Object.keys(this.items)[index];
  }
  public length() {
    return Object.keys(this.items).length;
  }
  public getItem(key: string) {
    return this.items[key];
  }
  public setItem(key: string, value: string) {
    this.items[key] = value;
  }
  public removeItem(key: string) {
    delete this.items[key];
  }
  public clear() {
    this.items = {};
  }
}

// Geolocation Interface
type GeolocationCoords = {
  latitude: number;
  longitude: number;
  altitude: number;
  accuracy: number;
  altitudeAccuracy: number;
  heading: number;
  speed: number;
};
type Position = {
  coords: GeolocationCoords;
};
type GeoError = {
  code: number;
  message: string;
};
type SuccessFunction = (position: Position) => void;
type ErrorFunction = (error: GeoError) => void;
type GeoOptions = {
  maximumAge: number;
  timeout: number;
  enableHighAccuracy: boolean;
};

type GetCurrentPosition = {
  (success: SuccessFunction): void;
  (success: SuccessFunction, error: ErrorFunction): void;
  (success: SuccessFunction, error: ErrorFunction, options: GeoOptions): void;
};

type WatchCurrentPosition = {
  (success: SuccessFunction): number;
  (success: SuccessFunction, error: ErrorFunction): number;
  (success: SuccessFunction, error: ErrorFunction, options: GeoOptions): number;
};

interface GeolocationAPI {
  getCurrentPosition: GetCurrentPosition;
  watchPosition: WatchCurrentPosition;
  clearWatch: (id: number) => void;
}

class Geolocator implements GeolocationAPI {
  getCurrentPosition: GetCurrentPosition = (
    success: SuccessFunction,
    error?: ErrorFunction,
    options?: GeoOptions
  ) => {
    return; // Implementation goes here :)
  };
  watchPosition: WatchCurrentPosition = (
    success: SuccessFunction,
    error?: ErrorFunction,
    options?: GeoOptions
  ) => {
    return 1; // Implementation goes here :)
  };
  clearWatch = (id: number) => {};
}
```
