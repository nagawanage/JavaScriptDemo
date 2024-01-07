console.group("Array demo");

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
    (value) => !arr01.includes(value) || !arr02.includes(value),
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
  { id: "2", value: "bbb" },
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

console.groupEnd();
