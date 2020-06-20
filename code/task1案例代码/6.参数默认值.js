
// 6.参数默认值
// url 请求url
// method 请求方式
// async 是否异步

// 使用短路这种方式赋值参数默认值
function get1(url, method, async) {
    // 缺点： 会将false也变成true
    async = async || true;
    console.log(async);             // true   
}
// 使用参数默认值
function get2(url, method, async = true) {
    console.log(async);         // false
}
get1("getUser", "post", false);
get2("getUser", "post", false);