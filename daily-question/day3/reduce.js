var reduce = function(arr, fn, initialValue) {
    // 设置了初始值就取初始值，否则就取数组第一个元素
    var result = typeof initialValue === 'undefined' ? arr[0] : initialValue;
    // 设置了初始值，初始值就是第一个索引，否则数组第一个元素为第一个索引
    var startPoint = typeof initialValue === 'undefined' ? 1 : 0;
    arr.slice(startPoint)
        .forEach(function(val, index) {
            result = fn(result, val, index + startPoint, arr);
        });
    return result;
};
var sum = reduce([1, 2, 3], function(memo, num){
     return memo + num
    }, 0);

console.log(sum) //6
