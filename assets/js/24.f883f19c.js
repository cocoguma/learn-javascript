(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{304:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("h3",{attrs:{id:"什么是数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是数组"}},[t._v("#")]),t._v(" 什么是数组？")]),t._v(" "),s("p",[s("em",[t._v("数组是存储在连续内存位置的项目的集合。这个想法是将多个相同类型的物品存储在一起。这使得通过简单地向基值（即数组的第一个元素的内存位置（通常由数组的名称表示）添加偏移量）来计算每个元素的位置变得更容易。")])]),t._v(" "),s("h3",{attrs:{id:"数组的优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组的优点"}},[t._v("#")]),t._v(" 数组的优点")]),t._v(" "),s("ul",[s("li",[t._v("访问元素很快")]),t._v(" "),s("li",[t._v("缓存局部性，提升性能")]),t._v(" "),s("li",[t._v("用单个名称表示相同类型的多个数据项")]),t._v(" "),s("li",[t._v("存储多个相同名称相似类型的数据")]),t._v(" "),s("li",[t._v("可以用于实现其他数据结构")])]),t._v(" "),s("h3",{attrs:{id:"数组的缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组的缺点"}},[t._v("#")]),t._v(" 数组的缺点")]),t._v(" "),s("ul",[s("li",[t._v("静态数组必须固定大小")]),t._v(" "),s("li",[t._v("数组小数据多时会丢失")]),t._v(" "),s("li",[t._v("单个数组不能存储不同类型的数据")]),t._v(" "),s("li",[t._v("插入删除难以实现")])]),t._v(" "),s("h3",{attrs:{id:"数组相关问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组相关问题"}},[t._v("#")]),t._v(" 数组相关问题")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("如果不初始化数组会怎样？")]),t._v("\n使用数组时，数组内的数据会undefined。")]),t._v(" "),s("li",[s("strong",[t._v("为什么从数组中获取值的复杂度是O(1)？")]),s("br"),t._v("\n因为数组在内存中都是连续分配的，只需知道索引即为首址的偏移量，相加即可获取值。算术运算的复杂度就是O(1)。")]),t._v(" "),s("li",[s("strong",[t._v("什么时候应该使用数组而不是列表(仅java)？")]),s("br"),t._v("\n多维、静态分配、快速处理数据、类型为原始数据类型等情况时，不应该用ArrayList。")]),t._v(" "),s("li",[s("strong",[t._v("什么是循环排序数组？")]),t._v("  \t\n本身升序或者降序排序的数组，向左或向右移动几位，就是循环排序数组。")]),t._v(" "),s("li",[s("strong",[t._v("如何用哈希图比较两个数组？")]),s("br"),t._v("\n将每个值出现的次数通过keyvalue的形式存在map中，第二个数组比较时减去次数，如果出现0次或者不存在的就返回false即可。")]),t._v(" "),s("li",[s("strong",[t._v("链表相对于数组有什么优点？我们在什么场景下使用LinkedList，什么时候使用Array？")]),s("br"),t._v("\n插入删除更快，大小更加灵活，动态分配内存。需要频繁插入删除时，使用链表。")]),t._v(" "),s("li",[s("strong",[t._v("稀疏数组是什么意思？")]),s("br"),t._v("\n稀疏数组是大多数元素为0的数组，元素的索引不具有从0开始的特点，用二维数组记录非0值出现的行列和值。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\t\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用二维数组表示时输出行列为：")]),t._v("\n   \t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n \t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n \t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])])]),s("ol",{attrs:{start:"9"}},[s("li",[s("strong",[t._v("堆相对于排序数组有什么好处？")]),t._v("\n堆的创建时间复杂度更低，插入和删除更高效。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);