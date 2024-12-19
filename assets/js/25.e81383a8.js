(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{307:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"reduce的应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reduce的应用"}},[t._v("#")]),t._v(" reduce的应用")]),t._v(" "),s("h3",{attrs:{id:"reduce介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reduce介绍"}},[t._v("#")]),t._v(" reduce介绍")]),t._v(" "),s("p",[t._v("reduce主要实现的功能类似累加，通过一个值记录最终实现结果，并且将这个值不断放入遍历中，最后返回需要的最终结果。\nreduce((previousValue, currentValue, currentIndex, array) => { /* … */ } ,initialValue)\n首参方法中四个参数分别是上一个记录的值、当前遍历item、当前遍历index以及数组本身，次参则是可以给pre一个初始值。")]),t._v(" "),s("h3",{attrs:{id:"使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、累加（给一个初始值2）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" test "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pre"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pre"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出17")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、找出最大值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" test2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pre"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("pre"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("cur"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("pre"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出5")]),t._v("\n\n")])])]),s("p",[t._v("当如果数组项为数字，求最大最小值也可以Math.max(...arr)也可以实现甚至看起来更优雅。但局限性在类型为数字，而当数组项为其他类型时（如求一个对象数组中的某个属性的最大值），reduce可以提供一个更好的解决思路。")]),t._v(" "),s("h2",{attrs:{id:"初始化二维数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化二维数组"}},[t._v("#")]),t._v(" 初始化二维数组")]),t._v(" "),s("p",[t._v("本人在实际写代码的过程中遇到过初始化二维数组的场景，当时也想用fill实现，但是失败了，原因就是我直接放入了[]而指向了实际的数组对象，导致所有的都指向了同一个空数组，参考后用map可以更优雅实现。")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" secondArr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0: []")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1: []")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2: []")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3: []")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4: []")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// length: 5")]),t._v("\n\n")])])]),s("p",[t._v("初始化一个已知有几行的二维数组，只需先用0填充外面一层，再对每个进行遍历return空数组即可。")]),t._v(" "),s("h2",{attrs:{id:"从数组中过滤出假值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从数组中过滤出假值"}},[t._v("#")]),t._v(" 从数组中过滤出假值")]),t._v(" "),s("p",[t._v("用Boolean函数过滤掉所有假值：0，undefined，null，false，\"\"，''。弊端：0也会被滤掉，对于数字数组来说可能需要数字0的存在。")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arrFilter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Boolean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arrFilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出[3,2]")]),t._v("\n")])])]),s("h2",{attrs:{id:"空值合并运算符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空值合并运算符"}},[t._v("#")]),t._v(" 空值合并运算符")]),t._v(" "),s("p",[t._v("空值合并运算符 (??) 是一个逻辑运算符，当其左侧操作数为空或未定义时返回其右侧操作数，否则返回其左侧操作数。")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my school'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 输出: "my school"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" baz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出: 0")]),t._v("\n")])])]),s("h2",{attrs:{id:"将十进制转换为二进制或十六进制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将十进制转换为二进制或十六进制"}},[t._v("#")]),t._v(" 将十进制转换为二进制或十六进制")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 输出: "1010"')]),t._v("\nnum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 输出: "a"')]),t._v("\nnum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 输出: "12"')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);