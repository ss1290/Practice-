function strlength(input){
       var length=0
       while(input[length]!==undefined)
       length++
       return length
}
function improve(input){
   var str=strlength(input)
   var obj={}
   var array=[]
   for(var i=0;i<str;i++){
       obj[input[i]]=true

    }
    for(var i in obj){
        array.push(i)
    }
         return array
}
var result=improve([7 , 1 ,2 ,3 ,3 ,4 ,5 ,4 ,6 ,7 ,7 ,8 ,10 ,10 ,10 ,9])
console.log(result)