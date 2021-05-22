function strlength(input){
       var length=0
       while(input[length]!==undefined)
       length++
       return length
   }
   var input=[1,5,7,-1,2,4]
   sum=6
   pair=0
   str=strlength(input)
   for(let i=0;i<str;i++){
       for(let j=0;j<str;j++){
           if(input[i]+input[j]===sum&&j>i){
               pair++
               console.log('The pairs are '+input[i]+' and '+input[j])
           }
       }

   }
console.log('The number of pairs = ' +pair)