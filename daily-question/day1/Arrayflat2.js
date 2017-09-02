function flat(arr){
    return arr.reduce(function(prev,next){
        return prev.concat(Array.isArray(next) ? flat(next) : next)
    },[])
}

var arr = [1,[2,[3,[4,[5,[6]]]]],[7]]
flat(arr)
console.log(flat(arr))