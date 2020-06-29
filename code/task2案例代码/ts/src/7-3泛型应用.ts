export {}; // 确保跟其它示例没有成员冲突

// 1. 创建一个长度固定的number类型的数组，并且填充value值
function createNumberArray(length: number, value: number): number[] {
  const arr = Array<number>(length).fill(value);
  return arr;
}
// 2. 创建一个长度固定的string类型的数组，并且填充value值
function createStringArray(length: number, value: string): string[] {
  const arr = Array<string>(length).fill(value);
  return arr;
}

// 3. 通过泛型实现上面两种功能
function createArray<T>(length: number, value: T): T[] {
  const arr = Array<T>(length).fill(value);
  return arr;
}
const res1 = createNumberArray(3, 100);
console.log(res1); // [100, 100, 100]
const res2 = createArray<string>(3, "foo");
console.log(res2); // ["foo", "foo", "foo"]
