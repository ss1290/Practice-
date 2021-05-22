function strlength(input){
       var length=0
       while(input[length]!==undefined)
       length++
       return length
   }
let input=[1,2,3,3,3,4,1,5]
let obj={}
let str=strlength(input)
for(var i=0;i<str;i++){
    for(var j=0;j<str;j++){
        if(input[i]===input[j]&&j>i){
            obj[input[i]]=true
        }
    }
}
    for(i in obj){
        console.log(i)
    }

