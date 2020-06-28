// // 当前地方时和UTC时间的差值
// let date = new Date().getTimezoneOffset();
// // 获取当前地方时和UTC时间的差值
// let timezone = -date;

// console.log(timezone); // -240
// console.log(timezone / 60); // -4

// let date1 = new Date("1971-04-09");
// // 这里是+4还是-4
// console.log(date1.setHours(date1.getHours() + 8 + timezone));
// console.log(date1.getHours());

// function getSystemDate() {
//   let tz = "china";
//   Date.prototype.TimeZone = new Map([["china", 8]]);
//   Date.prototype.zoneDate = function () {
//     if (tz == undefined) {
//       return new Date();
//     } else {
//       for (let item of this.TimeZone.entries()) {
//         if (item[0] == tz) {
//           let d = new Date();
//           d.setHours(d.getHours() + item[1]);
//           return d;
//         }
//       }
//       return new Date();
//     }
//   };
// }
// var d = new Date();
// d.setFullYear(1947, 03, 21);
// console.log(d);

// 当前地方时和UTC时间的差值
// let date = new Date().getTimezoneOffset();
// // 获取当前地方时和UTC时间的差值
// let timezone = -date;
// timezone = timezone / 60;
// let birthday = new Date(info.birthday);
// console.log(birthday, "日期", timezone);
// birthday.setHours(birthday.getHours() + timezone === 8 ? 0 : 8);
// console.log(birthday, "日期", birthday.getHours());
