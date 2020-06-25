
// 11. proxy 对象

const person = {
    name: "abc",
    age: 20
};
// proxy返回的就是一个代理之后的对象
// proxy第一个参数是需要代理的目标对象
// 第二个参数是代理的处理对象(get,set,deleteProperty....方法)
const personProxy = new Proxy(person, {
    // get方法监视我们属性的访问
    get(target, property) {
        console.log(`访问了${property}属性`);
        return property in target ? target[property] : undefined;   // 返回属性值
        // return target[property];
    },
    // set方法监视我们设置属性的过程
    set(target, property, value
    ) {
        console.log(`设置了${property}属性`);
        // 在这里可以做属性值的判断
        // 例如： age属性必须是int类型
        if (property === "age" && !Number.isInteger(value)) {
            throw new TypeError(`${property} property is not an int`);
        }
        target[property] = value;   // 设置属性值
    },
});
console.log(personProxy.name);
personProxy.name = "lisi";
personProxy.age = "21";