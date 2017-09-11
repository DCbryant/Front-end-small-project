实现一个parseQuery函数，能够解析location的search字符串(不包括'?')。
输入一个search，输出一个object，同名参数则是会成为数组。
 

难点：
1. 有多个value要push到数组
2. 若只有key没有value也要写到对象里面