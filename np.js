function strlength(input){
       var length=0
       while(input[length]!==undefined)
       length++
       return length
   }
   var flag=0
   var string='shashank'
   var array=[]
   var str=strlength(string)
   for(i in string){
       array.push(string[i])
   }
   for(var i=0;i<str;i++){
       flag=0
       for(var j=0;j<str;j++){
           if(array[i]==array[j]){
               flag++
           }

           }
           if(flag<2){
               console.log(array[i])
               break
           }
       }