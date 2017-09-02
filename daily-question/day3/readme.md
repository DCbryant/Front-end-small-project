实现一个reduce函数，作用和原生的reduce类似。
reduce(list, iteratee, [memo])，memo是reduce函数的初始值，会被每一次成功调用iteratee函数的返回值所取代 。这个迭代传递4个参数：memo,value 和 迭代的index和最后一个引用的整个 list。如果没有memo传递给reduce的初始调用，iteratee不会被列表中的第一个元素调用。第一个元素将取代memo参数传递给列表中下一个元素调用的iteratee函数。
Ex：var sum = reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
=> 6
