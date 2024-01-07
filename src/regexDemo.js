console.log("---------- regex Demo ----------");
// 数字3桁
const patternNum3 = /[0-9]{3}/;
console.log(patternNum3.test(123));

// 1〜3文字以内
const patternLen = /^.{1,3}$/;
const result = patternLen.test("abあ.");
console.log(result);

// 郵便番号
const pattern = /^\d{3}-?\d{4}$/g;
const resultPost = "121-4440".match(pattern);
console.log(resultPost);

//正規表現パターン（半角英数４桁に一致）
const regexA = new RegExp(/^\w{4}$/);
//判定
const str = "hoge";
if (regexA.test(str)) {
  console.log("正規表現パターンに一致しています。");
} else {
  console.log("正規表現パターンに一致していません。");
}

//正規表現パターン（時間）
const regexTime = new RegExp(/^[0-2][0-9]:[0-5][0-9]+$/);
//判定
const t = "24:59";
if (regexTime.test(t)) {
  console.log("正規表現パターンに一致しています。");
} else {
  console.log("正規表現パターンに一致していません。");
}
