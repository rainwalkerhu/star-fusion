/* commonjs */
// 使用require和exports关键字和模块系统进行交互
// CommonJS不支持异步加载，node使用
// 一个文件就是一个模块
// webpack实现了该规范

// 导出 moduleA.js
module.exports = {
    functionA() { },
    functionB() { }
}

// 导入
const modules = require('./modulesA.js.js')
modules.functionA()
modules.functionB()

/* AMD */

// AMD诞生的原因是，是因为CommonJS不支持异步加载，不适合浏览器环境。
// define关键字用于定义模块，require关键字用于导入模块
// require.js实现了该规范

// 导出 moduleB.js
define(function () {
    'use strict';
    return {
        functionA(a, b) {
            return a * a + b * b
        }
    }
})

// 导入
require(['./moduleB.js'], function (moduleB) {
    console.log(moduleB)
})


// CMD
// 可以理解为AMD的变种，典型代表实现为seajs(阿里)
// AMD和CMD最大的区别是对依赖模块的执行时机处理不同，而不是加载的时机或者方式不同，二者皆为异步加载模块。
// AMD依赖前置，js可以方便知道依赖模块是谁，立即加载；
// 而CMD就近依赖，需要使用把模块变为字符串解析一遍才知道依赖了那些模块
// 这也是很多人诟病CMD的一点，牺牲性能来带来开发的便利性，实际上解析模块用的时间短到可以忽略。
// 一句话总结：
// 两者都是异步加载，只是执行时机不一样。AMD是依赖前置，提前执行，CMD是依赖就近，延迟执行。

//导出 module1.js
define(function (require, exports, module) {
    // require用于加载依赖模块，如果有的话
    exports.a = 'a'
    module.exports = 'b'
})

//导入
define(function (require) {
    var m1 = require('./module1')
    console.log(m1)
})

// es6
// ES6在语言层面上实现了模块机制，与CommonJS与AMD规范不同的是ES6的模块是静态的,必须在文件最顶层使用
// 使用export关键字导出，使用import关键字导入

// 导出 moduleC.js
export function functionC() {
    alert('我是原生模块C')
}

// 导入
import { functionC } from './functionC'

functionC()


// UMD
// 严格来说不是个规范，为了兼容各个规范做了几步判断

// AMD 模块以浏览器第一的原则发展，异步加载模块。
// CommonJS 模块以服务器第一原则发展，选择同步加载。它的模块无需包装(unwrapped modules)。

// UMD的实现很简单：

// 先判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块。
// 先判断是否支持Node.js模块格式（exports是否存在），存在则使用Node.js模块格式。
// 前两个都不存在，则将模块公开到全局（window或global）。

(function (root, factory) {
    if (typeof define === 'function' && define.amd) { // 判断模块是否遵循amd规范
        define([], factory);

    } else if (typeof module === 'object' && module.exports) { //判断模块是否遵循commonjs规范,也就是nodejs模块化
        module.exports = factory();
    } else { // 否则就是没有模块化，将模块公开到全局（window或global）
        root.returnExports = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    return {};
}));


// 组件的诞生，以模块化技术为基石

// 前端开发模式变迁

// jquery时代 特征：手写html，使用javascript或jquery手动操作DOM节点
// 典型的前端 页面如下 
// todo 展示html原始结构

// 后juqery时代：以requirejs为起点，nodejs和webpack诞生标志前端进入工程化时代，同时期前端框架渐渐不再谈论jquery
// 上述模块化方案也是发生在后jquery时代
// 期间除了javascript模块化方案百花齐放，还诞生了前端模板语法（html）,前端路由（spa）
// 随着nodejs不断发展成熟，angular，react，vue先后诞生，不约而同采用MVVM方案，前端不再直接操作DOM节点
// 值得一提，React为了引入JSX，必须需要引入编译，这又间接促成Babel与webpack的壮大
// angular把前端组件化开发模式带入前端开发者的视野,一个组件是一个包含完整功能和UI界面的js文件
// react首先提出虚拟DOM(Virtual DOM,用js对象描述浏览器DOM节点)，并将JSX，css-in-js发扬光大
// 后起之秀vue借助webpack，vue-loader，优雅的将html模板语法和javascript,css集合在vue文件中
// Web Components: 就是提供浏览器底层的支持，不依赖各种框架的支持和webpack的编译，让我们也能使用组件
// Web Components 包括 HTML Templates, Shadow DOM, Custom elements 和 HTML Imports 四部分提案，目前未被浏览器完整实现

//  看一个组件
// react

// 发展到现在，诞生了许多机遇react和vue框架的上层建筑，angular因为各种原因逐渐没落
// 组件化，使得前端开发进入搭积木时代，那么组件库就是我们开发前端界面的材料库，一切为了提效
// react：ant-design，Material UI
// vue: element-ui,Mint UI，iView

// 演示组件库搭建页面