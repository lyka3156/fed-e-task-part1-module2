
// @flow

// 8. 特殊类型

// 1. 字面量类型
const a: "foo" = "foo";

// 2. 字面量类型+或类型
const type: "success" | "warning" | "danger" = "success";

// 3. 声明一个既是string和number类型
type stringOrNumber = string | number;

const b: stringOrNumber = "string";    // 100

// 4. ?可选类型可以为null和undefined
const gener1: ?number = null;   // undefined, 100
// 上面这种类型相当于下面的类型
const gener3: number | null | void = undefined; 