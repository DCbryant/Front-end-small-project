function flat(arr) {
    return arr.toString().split(',').map(function(item){
        return +item
    })
}

var arr = [1,[2,[3,[4,[5,[6]]]]],[7]]
flat(arr)
console.log(flat(arr))