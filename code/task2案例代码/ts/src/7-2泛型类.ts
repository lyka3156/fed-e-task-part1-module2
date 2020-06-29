export = {}; // 模块作用域，防止变量冲突

// 7.2 泛型类

// 声明一个通用的泛型类
class GenericNumber<T> {
  // 根据传递的T类型来定义字段的类型
  zeroValue: T;
  add: (x: T, y: T) => T;
}

// 实例化一个number的泛型类
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

console.log(myGenericNumber.zeroValue); // 0
console.log(myGenericNumber.add(1, 2)); // 3
