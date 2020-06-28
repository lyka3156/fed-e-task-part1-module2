// 四、请详细说明 var, let, const 三种声明变量的方式之间的具体差别。

// 1. 答案  var,let,const的区别

// 1.1  var会变量提升，let和const不会

// 1.2  let与const有自己单独的块级作用域，可以解决for循环中不使用闭包的形式就能拿到对应的循环下标

// 1.3  同一作用域下let和const不能声明同名变量，而var可以

// 1.4 let的特性暂存死区
// 在当前块级作用域中存在tmp使用let/const声明的情况下，访问tmp，只会在当前作用域找变量tmp，而这时，还未到声明时候，所以控制台Error: Cannot access 'tmp' before initialization

// 1.5  const一旦声明必须赋值,不能使用null占位。 声明后不能再修改，如果声明的是引用类型数据，可以修改其属性
