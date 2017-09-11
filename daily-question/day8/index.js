function parseQuery(str){  
        var arr = search.split('&')
        var obj = {}
        for(var i=0;i<arr.length;i++){
            var strArr = arr[i].split('=')
            console.log(strArr)
            if(obj[strArr[0]]){
                var item = obj[strArr[0]]
                obj[strArr[0]] = []
                obj[strArr[0]].push(item,strArr[0])
            }else{
                obj[strArr[0]] = strArr[1]
            }

            if(strArr[1] === undefined){
                obj[strArr[0]] = ''
            }
        }
        return obj
}
var search = 'name=sa&age=21&address=qwe&address=dc&kaka'
parseQuery(search)
console.log(parseQuery(search))