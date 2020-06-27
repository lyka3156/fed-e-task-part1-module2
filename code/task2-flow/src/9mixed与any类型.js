// @flow

// 9.1 mixed类型
function passMixed(value: mixed) {
    // value * value;  // 编译上会报错
    if (typeof value === "number") {
        value * value;
    }

}
passMixed("string");
passMixed(null);


// 9.2 any类型
function passAny(value: any) {
    value * value;      // 语法上不会报错
}
passAny("string");
passAny(null);