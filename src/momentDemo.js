import moment from "moment";

console.group("moment demo");

console.log("moment=", moment());
console.log("moment=", moment("2013-10-08"));

moment(); // デフォルト: 現在時刻
moment("2013-02-08T09:30:26"); // 文字列で設定
const today = moment().format().split("T")[0];
moment({ years: 2013, months: 2, days: 8, hours: 9, minutes: 30, seconds: 26 }); // オブジェクトで設定
moment(new Date(2014, 7, 8)); // Date
moment([2014, 7, 8]); // Array
console.log({ today });

const nextDate = moment("2014-04-01").add(1, "days").format();
console.log({ nextDate });

// 日付
const inputStart = "2022-10-28";
const inputEnd = "2022-11-05";
// const inputStartSplit = inputStart.split('-');
// const startDate = new Date(inputStartSplit[0], inputStartSplit[1] - 1, inputStartSplit[2]);
// console.log("startDate=",startDate);

const dateArr = [inputStart];
let date = inputStart;
// for (let i = 0; i < 50; i++) {
//   date = moment(date).add(1, 'days').format().split("T")[0]
//   if(date > inputEnd) {
//     break
//   }
//   dateArr.push(date);
// }

while (date < inputEnd) {
  date = moment(date).add(1, "days").format().split("T")[0];
  dateArr.push(date);
}

console.log(dateArr);

console.groupEnd();
