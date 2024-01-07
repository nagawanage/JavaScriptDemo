console.group("Object Demo");

/* オブジェクト */
// オブジェクトの配列のソート
console.log("<オブジェクトの配列のソート>");
const objArr = [
  { start: "2022-10-10", end: "2022-10-12" },
  { start: "2022-10-01", end: "2022-10-04" },
  { start: "2022-10-01", end: "2022-10-02" },
  { start: "2022-11-01", end: "2022-11-01" },
  { start: "1234555555", end: "2022-11-01" }, // 最初
  { start: "aaaaaaaaaa", end: "2022-11-01" }, // 最後
];

objArr.sort((a, b) => (a.start + a.end > b.start + b.end ? 1 : -1));
console.log(objArr);

console.warn("-- オブジェクト -----");
const ob1 = { a: 2, b: 3, c: 5 };
const ob2 = { x: 12, y: 13 };
const ob3 = { ax: 12, ay: 13 };
let obx = { ...ob1, ...ob2 }; // {a: 2, b: 3, c: 5, x: 12, y: 13}
obx = { ...obx, ...ob3, ...{ xxx: 123 } };
console.log(obx); // {a: 2, b: 3, c: 5, x: 12, y: 13…}
console.table(obx); // {a: 2, b: 3, c: 5, x: 12, y: 13…}

/** オブジェクト単体でmapメソッド */
const obj = { a: 2, b: 3, c: 5 };
console.log(
  "オブジェクト単体でmapメソッド: ",
  Object.keys(obj).map((el, index) => {
    console.log("el>>", el); //a, b, c
    return obj[el];
  }),
); //[2, 3, 5]

// オブジェクトのリストでmapメソッド
const objArry = [{ id: 11 }, { id: 12 }, { id: 13 }];
const objId = Object.keys(objArry).map((el, index) => {
  // el=index
  return objArry[index].id;
});
console.log("オブジェクトのリストでmapメソッド: ", objId); //[2, 3, 5]

// 両方に含む要素のリストを返す
function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}
const intersectionRes = intersection(["4", "3", "1", "2"], ["2", "3"]);
console.log("intersectionRes=", intersectionRes);

// union/not
function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

const ar1 = [{ id: "1" }, { id: "2" }, { id: "3" }];
const ar2 = [{ id: "11" }, { id: "12" }];
console.log(union(ar1, ar2));

//
const base = [{ id: "A" }, { id: "C" }, { id: "B" }, { id: "D" }];
const b = [{ id: "C" }, { id: "D" }, { id: "E" }];

const index = base.findIndex((el) => el.id === "B") > 0;
console.log("index:", index);

const res = [];
base.map((baseEl) => {
  b.findIndex((el) => {
    el.id === baseEl.id ? res.push(baseEl) : "";
  });
});
console.log(res);

// not obj: aのみの要素を返す
function notObj(a, b) {
  const result = [];
  a.map((el) => {
    const idx = b.findIndex((e) => {
      return e.id === el.id;
    });
    if (idx === -1) {
      result.push(el);
    }
  });
  return result;
}
console.log("notObj:", notObj(base, b)); // E

function unionObj(a, b) {
  return [...a, ...notObj(b, a)];
}
console.log("unionObj:", unionObj(base, b));

const arrx = [...Array(12)].map((_, i) => ({
  id: `nudge${("00" + i).slice(-2).toString()}`,
  message: "",
}));
console.log(arrx);

const arrXX = [];
arrXX.push(...["x"]);
console.log(arrXX);

console.groupEnd();
