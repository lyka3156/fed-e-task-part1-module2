// for 循环优化操作

var arr = [];
arr[10000] = "ceshi";

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for (var i = 0, len = arr.length; i < len; i++) {
//   console.log(arr[i]);
// }

for (var i = arr.length; i; i--) {
  console.log(arr[i]);
}
