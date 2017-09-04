function find(list, predicate){
    for(var i=0;i<list.length;i++){
        if(predicate(list[i]) === true){
            break;
        }
    }
    return i||undefined;
}

arr = [1,3,3,4,5,6]
result = find(arr,function(e){
  return e%2 == 0;
})
console.log(result)