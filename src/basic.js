import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Basic Demo</h1>
`;

console.group("Basic demo");

/* スプレッド構文 */
console.log("-- スプレッド構文 -----");
const arr = [1, 2];
const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr[0], arr[1]);
sumFunc(...arr); // 3
console.log([...Array(3)].map((el, index) => `index=${index}`));

const objx = { a: "aaa", b: "bbb" };
console.log({ ...objx, b: "xx" }); //b更新
console.log({ ...objx, c: "ccc" }); //c追加

const obj2 = { ...objx };
console.log(objx === obj2); //false

// 残りの展開
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2; // 分割代入
console.log(arr3); // [3, 4, 5]

/** 三項演算子で複数ロジック （即時関数） */
console.log("-- 三項演算子 -----");
let str = "aaa";
str === "aaa"
  ? (() => {
      const str = "aiueo";
      console.log("三項演算子: true");
      console.log(str);
    })()
  : console.log("三項演算子: false");

/** map */
console.log("-- map -----");
let m = new Map();
m.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
m.has("Jessie"); // true
m.get("Hilary"); // undefined
m.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
m.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
m.delete("Raymond"); // false
m.delete("Jessie"); // true
console.log(m.size); // 1

const lst = ["aaa", "bbb"];
const ret = lst.map((el) => el);
console.log(ret.join(","));

/** ES6 アロー関数 */
console.log("-- ES6 アロー関数 -----");
const array = [1, 2, 3];
/** ショートハンド: 式の結果が返される */
const eachA = array.map((el) => el + 10); // -> [11, 12, 13]
console.log(eachA);

/** {}を使うと複数の式を記述できる。returnが必須。 */
const eachB = array.map((el) => {
  const i = 100;
  return el + i;
}); // -> [11, 12, 13]
console.log(eachB);

/** NG */
/** {}を使ってreturnがない場合、何も返されないためundefined */
// const each = array.map((el) => {
//   el;
// }); // -> [undefined, undefined, undefined]

/** 時間 */
console.log("-- 時間 -----");
const date1 = new Date();
console.log(typeof date1); // object
console.log(toString.call(date1)); // [object Date]
console.log(date1); // Sat Feb 01 2020 20:49:28 GMT+0900 (日本標準時)
console.log(date1.toLocaleString()); // 2020/2/1 20:49:28

console.log([...Array(3).keys()]);
const aaaa = [...Array(7)].map((_, i) => ({
  id: i.toString(),
  title: "",
  notifyReason: "",
  message: "",
}));
console.log(aaaa);

// 日付
const inputStart = "2022-10-28";
const inputEnd = "2022-11-02";
const inputStartSplit = inputStart.split("-");
const startDate = new Date(
  inputStartSplit[0],
  inputStartSplit[1] - 1,
  inputStartSplit[2],
);
console.log("startDate=", startDate);
const dt = startDate;
console.log("dt=", dt);

const dateArr = [];

for (let i = 0; i < 5; i++) {
  let d = dt;
  d.setDate(d.getDate() + 1);
  dateArr.push(d);
  console.log(d.getFullYear(), d.getMonth() + 1, d.getDate()); //OK
}

console.log(dateArr);

// // 今日の日付文字列を渡す
// var date = new Date("2022/10/24");
// // 翌日を求める
// date.setDate(date.getDate() + 1);
// console.log("tomorrow=", date);

// const ww = [
//   { id: 11, name: "aa" },
//   { id: 22, name: "bb" }
// ];
// console.log(ww)

// for (const el of ww) {
//   if (el.id === 22) {
//     console.log('既に登録済みです');
//   }
// }

console.groupEnd();
