function strlength(input){
       var length=0
       while(input[length]!==undefined)
       length++
       return length
   }
   let input=[2,1,4,8,5,6,9]
   str=strlength(input)
   var max
   var min
   for(var i=0;i<str;i++){
       for(var j=0;j<str;j++){
           if(i==0){
               if(input[j]>input[i]){
                   max=input[j]
               }
           }
    if(input[j]>input[i]&&input[j]>max){
        max=input[j]
    }
    }
    }
    for(var i=0;i<str;i++){
       for(var j=0;j<str;j++){
           if(i==0){
               if(input[j]<input[i]){
                   min=input[j]
               }
           }
    if(input[j]<input[i]&&input[j]<min){
        min=input[j]
    }
    }
    }
    console.log('The maximum number is '+max)
    console.log('The minimum number is '+min)

    