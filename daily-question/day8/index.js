function parseQuery(str){  
        var arr = search.split('&')
        var obj = {}
        for(var i=0;i<arr.length;i++){
            var strArr = arr[i].split('=')
            if(obj[strArr[0]]){
                if(Array.isArray(obj[strArr[0]])){
                  obj[strArr[0]].push(strArr[1])
                }else{
                   var item = obj[strArr[0]]
                   obj[strArr[0]] = []
                   obj[strArr[0]].push(item,strArr[0])
                }
            }else{
                obj[strArr[0]] = strArr[1]
            }

            if(strArr[1] === undefined){
                obj[strArr[0]] = ''
            }
        }
        return obj
}
var search = 'name=sa&age=21&address=qwe&address=dc&address=bryant&kaka'
parseQuery(search)
console.log(parseQuery(search))