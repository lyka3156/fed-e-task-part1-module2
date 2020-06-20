
// 7.1 剩余参数      ...

// 这个数组args会在当前位置开始加入所有的形参 (可以取代之前argumengts接受无线参数的方式)
// 只能出现在形参的最后一位，并且只能出现一次
function foo(first, ...args) {
    console.log(first, args);    // 1 [2,3,4]
}
foo(1, 2, 3, 4);