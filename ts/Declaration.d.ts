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
