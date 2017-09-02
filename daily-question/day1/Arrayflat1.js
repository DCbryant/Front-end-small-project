function flat(arr){
    var result = []
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flat(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result
}

var arr = [1,[2,[3,[4,[5,[6]]]]],[7]]
flat(arr)
console.log(flat(arr))