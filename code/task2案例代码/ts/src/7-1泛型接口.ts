export = {}; // 模块作用域，防止变量冲突

// 7.2 泛型接口

interface GenericIdentityFn<T> {
  name: T;
}

let generaic: GenericIdentityFn<string> = {
  name: "lisi",
};

console.log(generaic);
