function map(list,iteratee){
    var result = []
    for(var i=0;i<list.length;i++){
        result[i] = iteratee(list[i],i)
    }
    return result
}

var result = map([1,2,3],function(num){
    return num * 3
})
console.log(result)