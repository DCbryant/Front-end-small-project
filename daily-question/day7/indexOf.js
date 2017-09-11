function indexOf(arr,item){
    for(var i=0;i<arr,length;i++){
        if(arr[i] === item){
            return i
        }
    }
    return -1
}

function sum(arr){
    var result = 0
    for(var i=0;i<arr.length;i++){
        result += arr[i]
    }
    return result
}
function sum2(arr){
    return arr.reduce(function(prev,next){
        return prev + next
    })
}

function remove(arr,item){
    var copyArr = arr.concat()
    var len = arr.length
    for(var i=0;i<len;i++){
        if(copyArr[i] === item){
            copyArr.splice(i,1)
        }
    }
    return copyArr
}

function remove1(arr,item){
    arr.filter(function(ele,index,arr){
        return arr[index] !== ele
    })
}

function remove2(arr,item){
    var result = []
    var len = arr.length
    for(var i=0;i<len;i++){
        if(arr[i] !== item){
            result.push(arr[i])
        }
    }
}

function removeWithoutCopy(arr,item){
    for(var i=0;i<arr.length;i++){
        if(arr[i] === item){
            arr.splice(i,1)
            i--
        }
    }
    return arr
}

function removeWithoutCopy1(arr,item){
    for(var i=arr.length;i>=0;i--){
        if(arr[i] === item){
            arr.splice(i,1)
        }
    }
    return arr
}

function append(arr,item){
    return arr.concat(item)
}