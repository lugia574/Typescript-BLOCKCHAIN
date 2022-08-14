type SuperPrint = (arr: any[]) => any;

const superPrint: SuperPrint = (a) => a[0];

const a = superPrint([6, 5, 4]);
const b = superPrint([6, true, "a"]);
const c = superPrint(["6", true, "a", 6, 5]);

a.toUpperCase();
