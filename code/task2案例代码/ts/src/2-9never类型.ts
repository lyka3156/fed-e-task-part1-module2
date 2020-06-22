export = {}; // 模块作用域，防止变量冲突

// 1.9 never类型

// type Foo = string | number | boolean;
type Foo = string | number;

function controlFlowAnalysisWithNever(foo: Foo) {
  if (typeof foo === "string") {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === "number") {
    // 这里 foo 被收窄为 number 类型
  } else {
    // foo 在这里是 never
    // 如果Foo类型多加了一个类型就会编译失败
    const check: never = foo;
  }
}
controlFlowAnalysisWithNever(123);
controlFlowAnalysisWithNever("abc");
// controlFlowAnalysisWithNever(true);
