console.group("object demo");
console.warn("---------- Object Demo ----------");
console.groupEnd();

/* 配列 */
console.warn("-- 配列 -----");
const arr11 = [1, 2, 3];
const arr12 = [11, 12, 13];
arr11.push(...arr12);
console.log(arr11);
console.log(arr11.map((i) => i.toString())); //要素を文字列化

const ss = ["cate_01"];
const ss2 = "01";
console.log("ss:", [...ss, ...ss2]);

const nameArray = ["aa", "bb", "cc"];
nameArray.map((name, i) => console.log(`${i}: ${name}`));
console.log([...Array(3)].map((_, i) => i)); //  [0, 1, 2]

// 配列A内の重複カット
const dupArr = new Set(["a", "b", "a"]);
console.log(Array(...new Set(["a", "b", "a"]))); // ["a", "b"]

// 配列A-B間の重複カット
const getArraysDiff = (array01, array02) => {
  const arr01 = [...new Set(array01)],
    arr02 = [...new Set(array02)];
  return [...arr01, ...arr02].filter(
    (value) => !arr01.includes(value) || !arr02.includes(value)
  );
};

const array01 = [1, 2, 3];
const array02 = [2, 4];
console.log("getArraysDiff:", getArraysDiff(array01, array02)); // [0, 3, 4]

const zz = [...array01, ...array02].filter((value) => !array01.includes(value));
console.log("zz:", zz);

// ループでif判定
const master = [
  { id: "1", value: "aaa" },
  { id: "2", value: "bbb" }
];

let result = "";
for (let el of master) {
  console.log(el);
  result = el.value;
  break;
}

console.log("result:", result);

// 偶数のみに絞る
const numArray = [1, 2, 3, 4];
const newNumArray = numArray.filter((num) => {
  return num % 2 === 0;
});
console.log(newNumArray);

// 存在チェック
const arrStr = ["aaa", "bbb"];
if (arrStr.includes("bbb")) {
  console.log("既に登録済みです_1");
}

// 配列同士の要素重複チェック
const arrDup = ["ccc", "aaa"];
const arrMerge = [...arrStr, ...arrDup];
const s = new Set(arrMerge);
console.log("duplicate check:", s.size, arrMerge.length); // 3, 4

// ソート
console.log("<ソート>");
// const arraySort = [2, 5, 100, 4];
const arraySort = ["2", "5", "100", "4", "21", "c1", "c2", "c12"];
arraySort.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});
console.log(arraySort);

// 配列をマージソート（重複カット）
const array1 = [32, 2, 3];
const array2 = [3, 4, 5];
const array3 = Array.from(new Set([...array1, ...array2])).sort();
console.log("array3= ", array3); //[2, 3, 32, 4, 5]

const strArr1 = ["32", "2", "3", "a", "1"];
console.log("strArr=", strArr1.sort());

// 要素追加
const arrXX = [];
arrXX.push(...["x"]);
console.log(arrXX);

// =================================================

// // オブジェクトの配列のソート
// console.log("<オブジェクトの配列のソート>");
// const objArr = [
//   { start: "2022-10-10", end: "2022-10-12" },
//   { start: "2022-10-01", end: "2022-10-04" },
//   { start: "2022-10-01", end: "2022-10-02" },
//   { start: "2022-11-01", end: "2022-11-01" },
//   { start: "1234555555", end: "2022-11-01" }, // 最初
//   { start: "aaaaaaaaaa", end: "2022-11-01" } // 最後
// ];

// objArr.sort((a, b) => (a.start + a.end > b.start + b.end ? 1 : -1));
// console.log(objArr);

// /* オブジェクト */
// console.warn("-- オブジェクト -----");
// const ob1 = { a: 2, b: 3, c: 5 };
// const ob2 = { x: 12, y: 13 };
// const ob3 = { ax: 12, ay: 13 };
// let obx = { ...ob1, ...ob2 }; // {a: 2, b: 3, c: 5, x: 12, y: 13}
// obx = { ...obx, ...ob3, ...{ xxx: 123 } };
// console.log(obx); // {a: 2, b: 3, c: 5, x: 12, y: 13…}
// console.table(obx); // {a: 2, b: 3, c: 5, x: 12, y: 13…}

// /** オブジェクト単体でmapメソッド */
// const obj = { a: 2, b: 3, c: 5 };
// console.log(
//   "オブジェクト単体でmapメソッド: ",
//   Object.keys(obj).map((el, index) => {
//     console.log("el>>", el); //a, b, c
//     return obj[el];
//   })
// ); //[2, 3, 5]

// // オブジェクトのリストでmapメソッド
// const objArry = [{ id: 11 }, { id: 12 }, { id: 13 }];
// const objId = Object.keys(objArry).map((el, index) => {
//   // el=index
//   return objArry[index].id;
// });
// console.log("オブジェクトのリストでmapメソッド: ", objId); //[2, 3, 5]

// // 両方に含む要素のリストを返す
// function intersection(a, b) {
//   return a.filter((value) => b.indexOf(value) !== -1);
// }
// const intersectionRes = intersection(["4", "3", "1", "2"], ["2", "3"]);
// console.log("intersectionRes=", intersectionRes);

// // union/not
// function not(a, b) {
//   return a.filter((value) => b.indexOf(value) === -1);
// }

// function union(a, b) {
//   return [...a, ...not(b, a)];
// }

// const ar1 = [{ id: "1" }, { id: "2" }, { id: "3" }];
// const ar2 = [{ id: "11" }, { id: "12" }];
// console.log(union(ar1, ar2));

// //
// const base = [{ id: "A" }, { id: "C" }, { id: "B" }, { id: "D" }];
// const b = [{ id: "C" }, { id: "D" }, { id: "E" }];

// const index = base.findIndex((el) => el.id === "B") > 0;
// console.log("index:", index);

// const res = [];
// base.map((baseEl) => {
//   b.findIndex((el) => {
//     el.id === baseEl.id ? res.push(baseEl) : "";
//   });
// });
// console.log(res);

// // not obj: aのみの要素を返す
// function notObj(a, b) {
//   const result = [];
//   a.map((el) => {
//     const idx = b.findIndex((e) => {
//       return e.id === el.id;
//     });
//     if (idx === -1) {
//       result.push(el);
//     }
//   });
//   return result;
// }
// console.log("notObj:", notObj(base, b)); // E

// function unionObj(a, b) {
//   return [...a, ...notObj(b, a)];
// }
// console.log("unionObj:", unionObj(base, b));

// const arrx = [...Array(12)].map((_, i) => ({
//   id: `nudge${("00" + i).slice(-2).toString()}`,
//   message: ""
// }));
// console.log(arrx);
