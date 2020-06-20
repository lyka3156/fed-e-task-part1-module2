
// 8.2 箭头函数与 this


const person = {
    name: "tom",
    say1: function () {
        console.log("原始函数", `hi ${this.name}`);
    },
    say2: () => {
        // 这种情况不使用this，因为你当前所在的作用域在window上，而你需要的是person对象
        console.log("匿名函数", `hi ${this.name}`);
    },
    sayAsync1: function () {
        setTimeout(function () {
            console.log("原始函数", `hi ${this.name}`);
        }, 1000);
    },
    sayAsync2: function () {
        // 这种情况使用匿名函数,因为你当前作用域在person中
        setTimeout(() => {
            console.log("匿名函数", `hi ${this.name}`);
        }, 1000);
    }
};
// 传统函数
person.say1();       // 原始函数 hi tom
person.sayAsync1();       // 匿名函数 hi undefined
// 箭头函数 
person.say2();       // 原始函数 hi undefined
person.sayAsync2();       // 匿名函数 hi tom