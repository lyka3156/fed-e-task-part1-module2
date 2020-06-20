
# 1. ECMAScript的新特性

## 1.1 理解语言和平台之间的关系 (ECMAScript与JavaScript)
ECMAScript是一门脚本语言(简称es),通常把ECMAScript看做是JavaScript的标准化规范,实际上JavaScript是ECMAScript的扩张语言,因为ECMAScript只提供了最基本的语法(约定了我们的代码如何编写)


浏览器环境的JavaScirpt     
-  由 ECMAScript + Web API组成(BOM + DOM)
 ![avatar](../images/浏览器环境中的js.png)

Node环境的JavaScirpt
-  由 ECMAScript + Node API组成(fs net etc...)
 ![avatar](../images/node环境中的js.png)

 JavaScript语言本身指的就是ECMAScript

## 1.2 ECMAScript的发展过程
从2015年开始 ES 保持每年一个版本的迭代

 ![avatar](../images/ESCMScript的版本历史.png)

 ES2015 开始按照年份命名

## 1.3 EcMaScript2015(es6)的新特性
最新 ECMAScript 标准的代表版本 
- es6 相比于 ES5.1 的变化比较大
- 从这个版本开始，标准命名规则发生变化

好多人喜欢用 ES6 泛指所有的新标准
> 例如使用 es6 的 async+await

> 其实async+await是es2017制定的新特性

> 注意分辨资料中的ES6是指特指还是泛指


重点介绍在ES6 在 ES5.1 基础之上的变化
- 解决原有语法上的一些问题或者不足      
    - let/const快级作用域等等
- 对原有语法进行增强
    - 解构，展开,参数默认值，模板字符串等等 
- 全新的对象、全新的方法、全新的功能
    - promise,proxy,async/await等等
- 全新的数据类型和数据结构
    - Symbol,Set,Map等等

## 1.4 And more