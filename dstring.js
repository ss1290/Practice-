function strlength(input){
       var length=0
       while(input[length]!==undefined)
       length++
       return length
   }
   var input='shashank'
   var obj={}
   var str=strlength(input)
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